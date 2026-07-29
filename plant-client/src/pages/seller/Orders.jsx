import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  TableContainer,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

const sampleOrders = [
  {
    id: "#ORD1001",
    customer: "Rahul",
    plant: "Rose",
    quantity: 2,
    total: "$50",
    status: "Pending",
  },
  {
    id: "#ORD1002",
    customer: "Anjali",
    plant: "Snake Plant",
    quantity: 1,
    total: "$30",
    status: "Processing",
  },
  {
    id: "#ORD1003",
    customer: "Arun",
    plant: "Aloe Vera",
    quantity: 4,
    total: "$120",
    status: "Delivered",
  },
  {
    id: "#ORD1004",
    customer: "Nithin",
    plant: "Money Plant",
    quantity: 3,
    total: "$75",
    status: "Cancelled",
  },
];

export default function Orders() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const filteredOrders = sampleOrders.filter((order) => {
    const matchesSearch =
      order.customer.toLowerCase().includes(search.toLowerCase()) ||
      order.id.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      status === "" || order.status === status;

    return matchesSearch && matchesStatus;
  });

  const getBadgeColor = (status) => {
    switch (status) {
      case "Pending":
        return "orange";
      case "Processing":
        return "blue";
      case "Delivered":
        return "green";
      case "Cancelled":
        return "red";
      default:
        return "gray";
    }
  };

  return (
    <Box bg="#F8FAF5" minH="100vh" p={8}>
      <Heading color="#1B4332">
        Orders
      </Heading>

      <Text color="gray.600" mb={8}>
        View and manage customer orders.
      </Text>

      <Flex
        gap={4}
        mb={6}
        direction={{
          base: "column",
          md: "row",
        }}
      >
        <Input
          placeholder="Search Order ID or Customer..."
          _placeholder={{
            color: "gray.400",
          }}
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          bg="white"
          borderColor="green.300"
          _focus={{
            borderColor: "green.500",
          }}
        />
<Menu>
 <MenuButton
  as={Button}
  rightIcon={<ChevronDownIcon />}
  bg="white"
  border="1px solid"
  borderColor="green.300"
  color={status ? "#1B4332" : "gray.100"}
  w={{ base: "100%", md: "220px" }}
  textAlign="left"
  fontWeight="normal"
  _hover={{
    bg: "white",
    borderColor: "green.500",
  }}
  _active={{
    bg: "white",
  }}
  _focus={{
    borderColor: "green.500",
    boxShadow: "0 0 0 1px var(--chakra-colors-green-500)",
  }}
>
  <Flex justify="space-between" align="center" w="100%">
    <Text>{status || "Filter by Status"}</Text>
  </Flex>
</MenuButton>

  <MenuList
  borderRadius="lg"
  borderColor="green.200"
  boxShadow="lg"
  bg="white"
  py={2}
>
  <MenuItem _hover={{ bg: "green.50" }} bgColor="green.50" color="#1B4332" onClick={() => setStatus("")}>
    All Status
  </MenuItem>

  <MenuItem _hover={{ bg: "green.50" }} bgColor="green.50" color="#1B4332" onClick={() => setStatus("Pending")}>
    Pending
  </MenuItem>

  <MenuItem _hover={{ bg: "green.50" }} bgColor="green.50" color="#1B4332" onClick={() => setStatus("Processing")}>
    Processing
  </MenuItem>

  <MenuItem _hover={{ bg: "green.50" }} bgColor="green.50" color="#1B4332" onClick={() => setStatus("Delivered")}>
    Delivered
  </MenuItem>

  <MenuItem _hover={{ bg: "green.50" }} bgColor="green.50" color="#1B4332" onClick={() => setStatus("Cancelled")}>
    Cancelled
  </MenuItem>
</MenuList>
</Menu>
      </Flex>

      <Box
        bg="white"
        borderRadius="xl"
        border="1px solid"
        borderColor="green.100"
        boxShadow="md"
        overflowX="auto"
      >
        <TableContainer>
          <Table variant="simple">
            <Thead bg="green.50">
              <Tr>
                <Th>Order ID</Th>
                <Th>Customer</Th>
                <Th>Plant</Th>
                <Th isNumeric>Qty</Th>
                <Th isNumeric>Total</Th>
                <Th>Status</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>

            <Tbody>
              {filteredOrders.map((order) => (
                <Tr
                  key={order.id}
                  _hover={{
                    bg: "green.50",
                  }}
                >
                  <Td fontWeight="600" color="#1B4332">
                    {order.id}
                  </Td>

                  <Td  color="#1B4332">{order.customer}</Td>

                  <Td color="#1B4332">{order.plant}</Td>

                  <Td isNumeric color="#1B4332">
                    {order.quantity}
                  </Td>

                  <Td isNumeric color="#1B4332">
                    {order.total}
                  </Td>

                  <Td>
                    <Badge
                      colorScheme={getBadgeColor(
                        order.status
                      )}
                      px={3}
                      py={1}
                      borderRadius="full"
                    >
                      {order.status}
                    </Badge>
                  </Td>

                  <Td>
                    <Button
                      size="sm"
                      colorScheme="green"
                      variant="outline"
                    >
                      View
                    </Button>
                  </Td>
                </Tr>
              ))}

              {filteredOrders.length === 0 && (
                <Tr>
                  <Td
                    colSpan={7}
                    textAlign="center"
                    py={8}
                  >
                    No orders found.
                  </Td>
                </Tr>
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
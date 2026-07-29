import {
  Box,
  Heading,
  Table,
  TableContainer,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  Avatar,
} from "@chakra-ui/react";

export default function RecentOrdersTable() {
  const orders = [
    {
      id: "#1001",
      customer: "John",
      plant: "Snake Plant",
      amount: "$35",
      status: "Delivered",
    },
    {
      id: "#1002",
      customer: "David",
      plant: "Rose",
      amount: "$18",
      status: "Pending",
    },
    {
      id: "#1003",
      customer: "Sophia",
      plant: "Money Plant",
      amount: "$22",
      status: "Cancelled",
    },
  ];

  return (
    <Box
      bg="white"
      p={6}
      borderRadius="xl"
      shadow="md"
      mt={8}
    >
      <Heading size="md" mb={5} color="green.700">
        Recent Orders
      </Heading>

      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Customer</Th>
              <Th>Plant</Th>
              <Th>Order ID</Th>
              <Th>Amount</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>

          <Tbody>
            {orders.map((order) => (
              <Tr key={order.id}>
                <Td>
                  <Avatar
                    size="sm"
                    name={order.customer}
                    mr={3}
                  />
                  {order.customer}
                </Td>

                <Td color="gray.700">{order.plant}</Td>

                <Td color="gray.700">{order.id}</Td>

                <Td color="green.700">{order.amount}</Td>

                <Td>
                  <Badge
                    colorScheme={
                      order.status === "Delivered"
                        ? "green"
                        : order.status === "Pending"
                        ? "orange"
                        : "red"
                    }
                  >
                    {order.status}
                  </Badge>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
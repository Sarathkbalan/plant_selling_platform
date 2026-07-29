import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Input,
  Select,
  Table,
  TableContainer,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  Button,
} from "@chakra-ui/react";

const inventoryData = [
  {
    id: 1,
    plant: "Rose",
    category: "Flower",
    stock: 25,
    price: "$25",
  },
  {
    id: 2,
    plant: "Snake Plant",
    category: "Indoor Plant",
    stock: 5,
    price: "$40",
  },
  {
    id: 3,
    plant: "Aloe Vera",
    category: "Medicinal Plant",
    stock: 0,
    price: "$18",
  },
  {
    id: 4,
    plant: "Money Plant",
    category: "Indoor Plant",
    stock: 14,
    price: "$30",
  },
];

export default function Inventory() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const filteredPlants = inventoryData.filter((plant) => {
    const matchesSearch = plant.plant
      .toLowerCase()
      .includes(search.toLowerCase());

    if (filter === "In Stock") {
      return matchesSearch && plant.stock > 5;
    }

    if (filter === "Low Stock") {
      return matchesSearch && plant.stock > 0 && plant.stock <= 5;
    }

    if (filter === "Out of Stock") {
      return matchesSearch && plant.stock === 0;
    }

    return matchesSearch;
  });

  const getStatus = (stock) => {
    if (stock === 0)
      return {
        label: "Out of Stock",
        color: "red",
      };

    if (stock <= 5)
      return {
        label: "Low Stock",
        color: "orange",
      };

    return {
      label: "In Stock",
      color: "green",
    };
  };

  return (
    <Box bg="#F8FAF5" minH="100vh" p={8}>
      <Heading color="#1B4332">
        Inventory
      </Heading>

      <Text color="gray.600" mb={8}>
        Manage your plant inventory.
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
          placeholder="Search plant..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          bg="white"
          borderColor="green.300"
          _focus={{
            borderColor: "green.500",
          }}
          _placeholder={{
            color: "gray.400",
          }}
        />

        <Select
          w={{
            base: "100%",
            md: "220px",
          }}
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value)
          }
          bg="white"
          borderColor="green.300"
        >
          <option value="">All Stock</option>
          <option>In Stock</option>
          <option>Low Stock</option>
          <option>Out of Stock</option>
        </Select>
      </Flex>

      <Box
        bg="white"
        borderRadius="xl"
        border="1px solid"
        borderColor="green.100"
        boxShadow="md"
      >
        <TableContainer>
          <Table variant="simple">
            <Thead bg="green.50">
              <Tr>
                <Th>Plant</Th>
                <Th>Category</Th>
                <Th isNumeric>Stock</Th>
                <Th isNumeric>Price</Th>
                <Th>Status</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>

            <Tbody>
              {filteredPlants.map((plant) => {
                const status = getStatus(
                  plant.stock
                );

                return (
                  <Tr
                    key={plant.id}
                    _hover={{
                      bg: "green.50",
                    }}
                    color="#1B4332"
                  >
                    <Td fontWeight="600">
                      {plant.plant}
                    </Td>

                    <Td>
                      {plant.category}
                    </Td>

                    <Td isNumeric>
                      {plant.stock}
                    </Td>

                    <Td isNumeric>
                      {plant.price}
                    </Td>

                    <Td>
                      <Badge
                        colorScheme={
                          status.color
                        }
                        px={3}
                        py={1}
                        borderRadius="full"
                      >
                        {status.label}
                      </Badge>
                    </Td>

                    <Td>
                      <Flex gap={2}>
                        <Button
                          size="sm"
                          colorScheme="green"
                          variant="outline"
                        >
                          Edit
                        </Button>

                        <Button
                          size="sm"
                          colorScheme="green"
                        >
                          Update Stock
                        </Button>
                      </Flex>
                    </Td>
                  </Tr>
                );
              })}

              {filteredPlants.length === 0 && (
                <Tr>
                  <Td
                    colSpan={6}
                    textAlign="center"
                    py={8}
                  >
                    No plants found.
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
import {
  Badge,
  Box,
  Flex,
  Heading,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";
import { FaFilter } from "react-icons/fa";

const plants = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=80",
    name: "Monstera Deliciosa",
    category: "Tropical",
    stock: 42,
    seller: "Green Sanctuary",
    price: "$45.00",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=80",
    name: "Calathea Orbifolia",
    category: "Indoor",
    stock: 8,
    seller: "Urban Jungle",
    price: "$32.50",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=80",
    name: "Fiddle Leaf Fig",
    category: "Trees",
    stock: 15,
    seller: "Botany Bay",
    price: "$89.00",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=80",
    name: "Snake Plant Laurentii",
    category: "Succulents",
    stock: 120,
    seller: "Green Sanctuary",
    price: "$24.00",
  },
];

export default function InventoryTable() {
  return (
    <Box
      bg="white"
      p={6}
      borderRadius="2xl"
      boxShadow="md"
      border="1px solid"
      borderColor="gray.200"
    >
      <Flex
        justify="space-between"
        align="center"
        mb={6}
      >
        <Heading size="md" color="green.700">
          Global Inventory Overview
        </Heading>

        <Flex gap={3}>
          <InputGroup w="260px">
            <InputLeftElement>
              <SearchIcon color="gray.400" />
            </InputLeftElement>

            <Input
              placeholder="Search plants..."
              _placeholder={{ color: "gray.400" }}
              border="1px solid"
                borderColor="gray.300"
              borderRadius="full"
            />
          </InputGroup>

          <IconButton
            icon={<FaFilter />}
            aria-label="Filter"
            borderRadius="full"
          />
        </Flex>
      </Flex>

      <Table variant="simple">
        <Thead>
          <Tr >
            <Th>Plant Name</Th>
            <Th>Category</Th>
            <Th>Stock</Th>
            <Th>Seller</Th>
            <Th isNumeric>Price</Th>
          </Tr>
        </Thead>

        <Tbody>
          {plants.map((plant) => (
            <Tr key={plant.id}>
              <Td>
                <Flex align="center">
                  <Image
                    src={plant.image}
                    boxSize="42px"
                    borderRadius="md"
                    mr={3}
                  />

                  <Text fontWeight="600" color="gray.700">
                    {plant.name}
                  </Text>
                </Flex>
              </Td>

              <Td color="gray.700">{plant.category}</Td>

              <Td>
                <Badge
                  colorScheme={
                    plant.stock < 10
                      ? "red"
                      : "green"
                  }
                  px={3}
                  py={1}
                  borderRadius="full"
                >
                  {plant.stock}
                </Badge>
              </Td>

              <Td   color="gray.700">{plant.seller}</Td>

              <Td
                isNumeric
                fontWeight="bold"
                color="green.700"
              >
                {plant.price}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
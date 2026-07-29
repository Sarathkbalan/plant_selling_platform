import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Image,
  Text,
  IconButton,
  Badge,
  useToast,
} from "@chakra-ui/react";
import { Pencil, Trash2, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { getMyListings, deletePlant } from "../../services/sellerPlantService";

export default function Plants() {
  const [plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const toast = useToast();
  const navigate = useNavigate();

  const loadListings = async () => {
    setIsLoading(true);

    try {
      const data = await getMyListings();
      setPlants(data);
    } catch (error) {
      console.error(error);

      toast({
        title: "Failed to load plants",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadListings();
  }, []);

  const handleDelete = async (plant) => {
    const confirmDelete = window.confirm(`Delete "${plant.name}" ?`);

    if (!confirmDelete) return;

    try {
      await deletePlant(plant.id);

      setPlants((prev) => prev.filter((p) => p.id !== plant.id));

      toast({
        title: "Plant deleted successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error(error);

      toast({
        title: "Failed to delete plant",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Flex justify="space-between" align="center" mb={6}>
        <Heading color="white">My Plants</Heading>

        <Button
          leftIcon={<Plus size={18} />}
          colorScheme="green"
          onClick={() => navigate("/seller/add")}
        >
          Add Plant
        </Button>
      </Flex>

      <Box
        bg="gray.100"
        borderRadius="lg"
        overflowX="auto"
        shadow="md"
        color="gray.700"
      >
        <Table variant="simple">
          <Thead bg="green.100">
            <Tr>
              <Th>Image</Th>
              <Th>Name</Th>
              <Th>Category</Th>
              <Th isNumeric>Price</Th>
              <Th isNumeric>Stock</Th>
              <Th>Status</Th>
              <Th textAlign="center">Actions</Th>
            </Tr>
          </Thead>

          <Tbody>
            {isLoading ? (
              <Tr>
                <Td colSpan={7}>
                  <Text py={6} textAlign="center">
                    Loading plants...
                  </Text>
                </Td>
              </Tr>
            ) : plants.length === 0 ? (
              <Tr>
                <Td colSpan={7}>
                  <Text py={6} textAlign="center">
                    No plants found.
                  </Text>
                </Td>
              </Tr>
            ) : (
              plants.map((plant) => (
                <Tr key={plant.id}>
                  <Td>
                    <Image
                      src={`http://localhost:5078${plant.imageUrl}`}
                      alt={plant.name}
                      boxSize="60px"
                      objectFit="cover"
                      borderRadius="md"
                      fallbackSrc="https://via.placeholder.com/60"
                    />
                  </Td>

                  <Td fontWeight="bold">{plant.name}</Td>

                  <Td>{plant.category?.name}</Td>

                  <Td isNumeric>₹{plant.price}</Td>

                  <Td isNumeric>{plant.stock}</Td>

                  <Td>
                    <Badge colorScheme={plant.stock > 0 ? "green" : "red"}>
                      {plant.stock > 0 ? "Available" : "Out of Stock"}
                    </Badge>
                  </Td>

                  <Td textAlign="center">
                    <IconButton
                      aria-label="Edit"
                      icon={<Pencil size={16} />}
                      colorScheme="blue"
                      size="sm"
                      mr={2}
                      onClick={() =>
                        navigate(`/seller/plants/edit/${plant.id}`)
                      }
                    />

                    <IconButton
                      aria-label="Delete"
                      icon={<Trash2 size={16} />}
                      colorScheme="red"
                      size="sm"
                      onClick={() => handleDelete(plant)}
                    />
                  </Td>
                </Tr>
              ))
            )}
          </Tbody>
        </Table>
      </Box>
    </>
  );
}

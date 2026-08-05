import { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Flex,
  Progress,
  Spinner,
  Center,
} from "@chakra-ui/react";
import api from "../../services/api"; // Adjust the path if needed

export default function CategorySplit() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const colors = [
    "green",
    "teal",
    "orange",
    "purple",
    "blue",
    "pink",
    "cyan",
    "red",
  ];

  useEffect(() => {
    fetchCategorySplit();
  }, []);

  const fetchCategorySplit = async () => {
    try {
      const response = await api.get("/plant/category-split");

      const data = response.data.map((item, index) => ({
        ...item,
        color: colors[index % colors.length],
      }));

      setCategories(data);
    } catch (error) {
      console.error("Failed to load category split:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
  bg="white"
  p={6}
  borderRadius="20px"
  border="1px solid"
  borderColor="gray.100"
  boxShadow="0 8px 25px rgba(0,0,0,.05)"
>
      <Heading size="md" color="#0db972" mb={2}>
        Category Split
      </Heading>

      <Text mt={2} color="gray.500" mb={8}>
        Plant distribution by category.
      </Text>

      {loading ? (
        <Center h="250px">
          <Spinner size="xl" color="green.500" />
        </Center>
      ) : (
        <VStack spacing={7} align="stretch">
          {categories.length > 0 ? (
            categories.map((item) => (
              <Box key={item.name}>
                <Flex justify="space-between" mb={2}>
                  <Text fontWeight="600" color="#0db972">
                    {item.name}
                  </Text>

                  <Text fontWeight="bold" color="#0db972">
                    {item.value}%
                  </Text>
                </Flex>

                <Progress
                  value={item.value}
                  colorScheme={item.color}
                  borderRadius="full"
                  size="sm"
                />
              </Box>
            ))
          ) : (
            <Text textAlign="center" color="gray.500">
              No category data available.
            </Text>
          )}
        </VStack>
      )}
    </Box>
  );
}


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Grid,
  Heading,
  Image,
  Text,
  Spinner,
  Center,
} from "@chakra-ui/react";

import { getPlants } from "../../../services/plantService";

function RelatedProducts({ currentPlantId }) {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPlants();
  }, [currentPlantId]);

  const loadPlants = async () => {
    try {
      const data = await getPlants();

      // Remove current plant and show only 4 related plants
      const related = data
        .filter((p) => p.id !== currentPlantId)
        .slice(0, 4);

      setProducts(related);
    } catch (error) {
      console.error("Error loading related products:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Center py={10}>
        <Spinner size="lg" color="green.500" />
      </Center>
    );
  }

  return (
    <Box>
      <Heading size="lg" mb={6}>
        Related Products
      </Heading>

      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={6}
      >
        {products.map((plant) => (
          <Box
            key={plant.id}
            bg="white"
            borderRadius="xl"
            overflow="hidden"
            shadow="md"
            borderWidth="1px"
          >
            <Image
              src={`http://localhost:5078${plant.imageUrl}`}
              alt={plant.name}
              h="220px"
              w="100%"
              objectFit="cover"
            />

            <Box p={4}>
              <Heading size="sm" color="green.600">
                {plant.name}
              </Heading>

              <Text
                mt={2}
                color="green.600"
                fontWeight="bold"
              >
                ₹{plant.price}
              </Text>

              <Button
                mt={4}
                colorScheme="green"
                w="full"
                onClick={() => navigate(`/home`)}
              >
                View Details
              </Button>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export default RelatedProducts;
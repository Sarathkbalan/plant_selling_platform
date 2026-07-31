import {
  Box,
  Button,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

const products = [
  {
    id: 1,
    name: "Money Plant",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 320,
    image:
      "https://images.unsplash.com/photo-1459156212016-c812468e2115",
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 410,
    image:
      "https://images.unsplash.com/photo-1463320726281-696a485928c7",
  },
  {
    id: 4,
    name: "Aloe Vera",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
];

function RelatedProducts() {
  return (
    <Box>
      <Heading size="lg" mb={6}>
        Related Products
      </Heading>

      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2,1fr)",
          lg: "repeat(4,1fr)",
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
              src={plant.image}
              h="220px"
              w="100%"
              objectFit="cover"
            />

            <Box p={4}>
              <Heading size="sm">
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
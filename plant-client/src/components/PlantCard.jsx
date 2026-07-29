import {
  Box,
  Image,
  Text,
  Button,
  VStack,
} from "@chakra-ui/react";
import bgplant from "../assets/plant.png";

function PlantCard({ plant }) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      shadow="sm"
    >
      <Image
       
        src={`http://localhost:5078/${plant.imageUrl}`}
        h="220px"
        w="100%"
        objectFit="cover"
      />

      <VStack align="start" p={4}>
        <Text fontWeight="bold" fontSize="lg">
          {plant.name}
        </Text>

        <Text color="gray.500" noOfLines={2}>
          {plant.description}
        </Text>

        <Text
          color="green.600"
          fontWeight="bold"
          fontSize="xl"
        >
          ₹{plant.price}
        </Text>

        <Button
          colorScheme="green"
          w="100%"
        >
          Add to Cart
        </Button>
      </VStack>
    </Box>
  );
}

export default PlantCard;
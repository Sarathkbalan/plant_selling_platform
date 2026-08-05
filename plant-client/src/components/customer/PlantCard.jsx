import {
  Box,
  Image,
  Text,
  Button,
  VStack,
  Badge,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../services/cartService";

function PlantCard({ plant }) {
  const navigate = useNavigate();
  const toast = useToast();

  const handleAddToCart = async (e) => {
  e.stopPropagation();

  console.log("Plant Object:", plant);
  console.log("Plant ID:", plant.id);

  try {
    await addToCart(plant.id, 1);
    navigate("/cart");
  } catch (error) {
    console.log(error.response?.data);

    toast({
      title: "Failed",
      description: error.response?.data?.inner || error.response?.data?.message,
      status: "error",
    });
  }
};

  return (
    <Box
      cursor="pointer"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      shadow="sm"
      transition="0.2s"
      _hover={{
        transform: "translateY(-5px)",
        shadow: "lg",
      }}
      onClick={() => navigate(`/plants/${plant.id}`)}
    >
      <Image
        src={`http://localhost:5078${plant.imageUrl}`}
        h="220px"
        w="100%"
        objectFit="cover"
      />

      <VStack align="start" p={4} spacing={2}>
        {/* Category */}
        <Badge colorScheme="green" variant="subtle">
          {plant.categoryName}
        </Badge>

        {/* Plant Name */}
        <Text fontWeight="bold" fontSize="lg">
          {plant.name}
        </Text>

        {/* Description */}
        <Text color="gray.500" noOfLines={2}>
          {plant.description}
        </Text>

        {/* Price */}
        <Text color="green.600" fontWeight="bold" fontSize="xl">
          ₹{plant.price}
        </Text>

        <Button
          colorScheme="green"
          w="100%"
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </VStack>
    </Box>
  );
}

export default PlantCard;

import {
  Badge,
  Box,
  Button,
  Divider,
  HStack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  FaLeaf,
  FaShoppingCart,
  FaBolt,
  FaStar,
  FaTruck,
  FaUndo,
  FaShieldAlt,
} from "react-icons/fa";

import QuantitySelector from "./QuantitySelector";

function ProductInfo({ plant }) {
  if (!plant) return null;

  return (
    <VStack align="stretch" spacing={6}>
      {/* Category */}
      <Badge
        colorScheme="green"
        px={3}
        py={1}
        borderRadius="full"
        w="fit-content"
      >
        {plant.category?.name || "Plant"}
      </Badge>

      {/* Product Name */}
      <Text
        fontSize={{ base: "3xl", md: "4xl" }}
        fontWeight="bold"
        color="gray.800"
      >
        {plant.name}
      </Text>

      {/* Rating */}
      <HStack spacing={1}>
        {[1, 2, 3, 4, 5].map((item) => (
          <Icon
            key={item}
            as={FaStar}
            color="yellow.400"
          />
        ))}

        <Text ml={2} color="gray.600">
          4.9 (128 Reviews)
        </Text>
      </HStack>

      {/* Price */}
      <HStack align="center">
        <Text
          fontSize="3xl"
          fontWeight="bold"
          color="green.600"
        >
          ₹{plant.price}
        </Text>

        <Badge colorScheme="green">
          In Stock
        </Badge>
      </HStack>

      <Divider />

      {/* Description */}
      <Box>
        <Text fontWeight="bold" color="gray.600" mb={2}>
          Description
        </Text>

        <Text
          color="gray.600"
          lineHeight="1.8"
        >
          {plant.description}
        </Text>
      </Box>

      {/* Product Details */}
      <Box>
        <Text fontWeight="bold" color="gray.600" mb={3}>
          Product Details
        </Text>

        <VStack align="stretch" spacing={3}>
          <HStack justify="space-between">
            <Text color="gray.500">Category</Text>
            <Text fontWeight="medium" color="gray.500">
              {plant.category?.name || "N/A"}
            </Text>
          </HStack>

          <HStack justify="space-between">
            <Text color="gray.500">Stock</Text>
            <Text
              color={
                plant.stock > 0
                  ? "green.600"
                  : "red.500"
              }
              fontWeight="bold"
            >
              {plant.stock} Available
            </Text>
          </HStack>

          <HStack justify="space-between">
            <Text color="gray.500">Plant ID</Text>
            <Text color="gray.500">#{plant.id}</Text>
          </HStack>
        </VStack>
      </Box>

      <Divider />

      {/* Features */}
      <VStack align="stretch" spacing={4}>
        <HStack>
          <Icon
            as={FaLeaf}
            color="green.500"
          />
          <Text color="gray.600">Fresh & Healthy Plant</Text>
        </HStack>

        <HStack>
          <Icon
            as={FaTruck}
            color="green.500"
          />
          <Text color="gray.600">Free Delivery Available</Text>
        </HStack>

        <HStack>
          <Icon
            as={FaUndo}
            color="green.500"
          />
          <Text color="gray.600">7-Day Easy Replacement</Text>
        </HStack>

        <HStack>
          <Icon
            as={FaShieldAlt}
            color="green.500"
          />
          <Text color="gray.600">Healthy Plant Guarantee</Text>
        </HStack>
      </VStack>

      <Divider />

      {/* Quantity */}
      <Box>
        <Text
          mb={3}
          fontWeight="bold"
          color="gray.600"
        >
          Quantity
        </Text>

        <QuantitySelector />
      </Box>

      {/* Buttons */}
      <HStack spacing={4}>
        <Button
          leftIcon={<FaShoppingCart />}
          colorScheme="green"
          size="lg"
          flex={1}
          isDisabled={plant.stock === 0}
          onClick={() => console.log("Add to Cart", plant.id)}
        >
          Add to Cart
        </Button>

        <Button
          leftIcon={<FaBolt />}
          colorScheme="orange"
          size="lg"
          flex={1}
          isDisabled={plant.stock === 0}
          onClick={() => console.log("Buy Now", plant.id)}
        >
          Buy Now
        </Button>
      </HStack>
    </VStack>
  );
}

export default ProductInfo;

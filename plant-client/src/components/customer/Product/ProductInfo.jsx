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

export default function ProductInfo() {
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
        Indoor Plant
      </Badge>

      {/* Product Name */}
      <Text
        fontSize={{ base: "3xl", md: "4xl" }}
        fontWeight="bold"
        color="gray.800"
      >
        Monstera Deliciosa
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

        <Text
          ml={2}
          color="gray.600"
        >
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
          $45
        </Text>

        <Text
          textDecoration="line-through"
          color="gray.400"
        >
          $60
        </Text>

        <Badge colorScheme="red">
          25% OFF
        </Badge>
      </HStack>

      <Divider />

      {/* Description */}
      <Box>
        <Text
          fontWeight="bold"
          mb={2}
        >
          Description
        </Text>

        <Text
          color="gray.600"
          lineHeight="1.8"
        >
          Monstera Deliciosa is one of the most popular indoor
          plants. It features beautiful split leaves, purifies
          the air, and adds a tropical touch to your home or
          office.
        </Text>
      </Box>

      {/* Features */}
      <VStack align="stretch" spacing={4}>
        <HStack>
          <Icon
            as={FaLeaf}
            color="green.500"
          />
          <Text>Air Purifying Plant</Text>
        </HStack>

        <HStack>
          <Icon
            as={FaTruck}
            color="green.500"
          />
          <Text>Free Delivery Available</Text>
        </HStack>

        <HStack>
          <Icon
            as={FaUndo}
            color="green.500"
          />
          <Text>7-Day Easy Replacement</Text>
        </HStack>

        <HStack>
          <Icon
            as={FaShieldAlt}
            color="green.500"
          />
          <Text>Healthy Plant Guarantee</Text>
        </HStack>
      </VStack>

      <Divider />

      {/* Quantity */}
      <Box>
        <Text
          mb={3}
          fontWeight="bold"
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
        >
          Add to Cart
        </Button>

        <Button
          leftIcon={<FaBolt />}
          colorScheme="orange"
          size="lg"
          flex={1}
        >
          Buy Now
        </Button>
      </HStack>
    </VStack>
  );
}
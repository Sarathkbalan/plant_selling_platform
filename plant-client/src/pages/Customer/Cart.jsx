import { Box, Heading, Text } from "@chakra-ui/react";

function Cart() {
  return (
    <Box p={6}>
      <Heading>Shopping Cart</Heading>
      <Text mt={4}>Your cart is empty.</Text>
    </Box>
  );
}

export default Cart;
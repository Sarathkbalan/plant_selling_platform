import {
  Box,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

export default function PromotionCard() {
  return (
    <Box
      bg="green.700"
      color="white"
      p={8}
      borderRadius="xl"
      shadow="md"
      h="100%"
    >
      <Heading size="md">
        Grow Your Marketplace
      </Heading>

      <Text mt={5}>
        Promote featured plants, increase visibility,
        and attract more customers.
      </Text>

      <Button
        mt={8}
        colorScheme="whiteAlpha"
      >
        Create Promotion
      </Button>
    </Box>
  );
}
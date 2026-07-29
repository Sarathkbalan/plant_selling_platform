
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import bgimage from "../assets/Container.png";

export default function Hero({
  title = "Bring Nature Home",
  subtitle = "Transform your space into a living sanctuary with our curated collection of botanical wonders. From easy-care greens to exotic bloomers.",
  ctaLabel = "Explore Collection",
  onCtaClick,
}) {
  return (
    <Box as="section" maxW="7xl" mx="auto" px={6} pt={6}>
      <Box
        position="relative"
        borderRadius="2xl"
        overflow="hidden"
        minH="420px"
        display="flex"
        alignItems="center"
        bgImage={bgimage}
        bgSize="cover"
        bgPosition="center"
      >
        <Box
          position="absolute"
          inset={0}
          bgGradient="linear(to-r, blackAlpha.600, blackAlpha.300, transparent)"
        />

        <Box position="relative" zIndex={1} px={10} py={16} maxW="xl">
          <Heading
            as="h1"
            color="white"
            fontWeight="bold"
            fontSize="5xl"
            lineHeight="1.1"
            letterSpacing="tight"
          >
            {title}
          </Heading>
          <Text mt={4} color="whiteAlpha.900" fontSize="md" lineHeight="tall" maxW="md">
            {subtitle}
          </Text>
          <Button
            onClick={onCtaClick}
            mt={7}
            bg="#1B4332"
            color="white"
            fontWeight="medium"
            borderRadius="full"
            px={6}
            py={3}
            h="auto"
            _hover={{ bg: "#163829" }}
          >
            {ctaLabel}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
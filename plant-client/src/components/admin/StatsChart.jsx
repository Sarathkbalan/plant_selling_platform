import {
  Box,
  Heading,
  Flex,
} from "@chakra-ui/react";

const heights = [
  "120px",
  "170px",
  "90px",
  "190px",
  "140px",
];

export default function StatsChart() {
  return (
    <Box
      bg="white"
      p={6}
      borderRadius="xl"
      shadow="md"
    >
      <Heading size="md" mb={8} color="green.700">
        Sales Analytics
      </Heading>

      <Flex
        justify="space-around"
        align="flex-end"
        h="220px"
      >
        {heights.map((h, i) => (
          <Box
            key={i}
            w="45px"
            h={h}
            bg="green.400"
            rounded="md"
          />
        ))}
      </Flex>
    </Box>
  );
}
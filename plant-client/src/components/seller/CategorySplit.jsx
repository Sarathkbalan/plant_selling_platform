import {
  Box,
  Heading,
  Text,
  VStack,
  Flex,
  Progress,
} from "@chakra-ui/react";

const categories = [
  {
    name: "Succulents",
    value: 42,
    color: "green",
  },
  {
    name: "Tropicals",
    value: 28,
    color: "green",
  },
  {
    name: "Flowering",
    value: 18,
    color: "orange",
  },
  {
    name: "Others",
    value: 12,
    color: "gray",
  },
];

export default function CategorySplit() {
  return (
    <Box
      bg="white"
      p={6}
      borderRadius="20px"
      border="1px solid"
      borderColor="gray.100"
      boxShadow="0 8px 25px rgba(0,0,0,.05)"
      h="400px"
    >
      <Heading size="md" color="#0db972" mb={2}>
        Category Split
      </Heading>

      <Text
        mt={2}
        color="gray.500"
        mb={8}
      >
        Sales distribution by plant type.
      </Text>

      <VStack
        spacing={7}
        align="stretch"
      >
        {categories.map((item) => (
          <Box key={item.name}>
            <Flex
              justify="space-between"
              mb={2}
            >
              <Text
                fontWeight="600"
                color="#0db972"
              >
                {item.name}
              </Text>

              <Text
                fontWeight="bold"
                color="#0db972"
              >
                {item.value}%
              </Text>
            </Flex>

            <Progress
              value={item.value}
              colorScheme={item.color}
              borderRadius="full"
              size="sm"
            />
          </Box>
        ))}
      </VStack>
    </Box>
  );
}
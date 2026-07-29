import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const requests = [
  {
    id: 1,
    nursery: "Green Sanctuary Nursery",
    time: "Applied: 2 hours ago",
    image: "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=80",
  },
  {
    id: 2,
    nursery: "Organic Roots Co.",
    time: "Applied: 1 day ago",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=80",
  },
];

export default function ApprovalQueue() {
  return (
    <Box
      bg="white"
      p={6}
      borderRadius="2xl"
      boxShadow="md"
      border="1px solid"
      borderColor="gray.200"
    >
      <Flex justify="space-between" mb={5}>
        <Heading size="md">Approval Queue</Heading>

        <Text
          color="green.600"
          fontWeight="600"
          cursor="pointer"
        >
          View All
        </Text>
      </Flex>

      <Stack spacing={4}>
        {requests.map((item) => (
          <Box
            key={item.id}
            border="1px solid"
            borderColor="gray.200"
            borderRadius="xl"
            p={4}
          >
            <Flex align="center">
              <Image
                src={item.image}
                boxSize="50px"
                borderRadius="md"
                mr={4}
              />

              <Box flex="1">
                <Text fontWeight="bold">
                  {item.nursery}
                </Text>

                <Text
                  color="gray.500"
                  fontSize="sm"
                >
                  {item.time}
                </Text>
              </Box>
            </Flex>

            <Flex mt={4} gap={3}>
              <Button
                colorScheme="green"
                size="sm"
                flex="1"
                borderRadius="full"
              >
                Approve
              </Button>

              <Button
                size="sm"
                flex="1"
                variant="outline"
                borderRadius="full"
              >
                Review
              </Button>
            </Flex>
          </Box>
        ))}

        <Flex
          h="40px"
          border="2px dashed"
          borderColor="gray.200"
          borderRadius="xl"
          justify="center"
          align="center"
          color="gray.500"
        >
          No more urgent requests
        </Flex>
      </Stack>
    </Box>
  );
}
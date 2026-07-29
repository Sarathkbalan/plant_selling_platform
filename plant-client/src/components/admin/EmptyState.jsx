import {
  Center,
  Text,
  VStack,
} from "@chakra-ui/react";

function EmptyState({
  message = "No Data Found",
}) {
  return (
    <Center py={20}>
      <VStack>
        <Text fontSize="5xl">📄</Text>

        <Text
          color="gray.500"
          fontWeight="bold"
        >
          {message}
        </Text>
      </VStack>
    </Center>
  );
}

export default EmptyState;
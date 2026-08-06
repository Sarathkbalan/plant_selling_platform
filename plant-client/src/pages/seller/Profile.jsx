import {
  Box,
  Heading,
  Text,
  Badge,
  Flex,
  Avatar,
} from "@chakra-ui/react";

import { useAuth } from "../../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  if (!user) {
    return (
      <Box p={6}>
        <Heading size="md">Loading...</Heading>
      </Box>
    );
  }

  return (
    <Box bg="gray.50" minH="100vh" p={8}>
      <Heading color="#1B4332" mb={2}>
        Seller Profile
      </Heading>

      <Text color="gray.600" mb={8}>
        View your profile information.
      </Text>

      <Box
        maxW="500px"
        mx="auto"
        bg="white"
        p={10}
        borderRadius="2xl"
        border="1px solid"
        borderColor="green.100"
        boxShadow="lg"
      >
        <Flex direction="column" align="center">
          <Avatar
            size="2xl"
            name={user.fullName || user.name}
            bg="green.500"
            color="white"
            mb={4}
          />

          <Heading size="md" color="#1B4332" mb={2}>
            {user.fullName || user.name || "N/A"}
          </Heading>

          <Badge
            colorScheme="green"
            px={4}
            py={1}
            borderRadius="full"
            mb={4}
          >
            {user.role || "N/A"}
          </Badge>

          <Text color="gray.600" fontSize="md">
            {user.email || "N/A"}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}
import {
  Avatar,
  Badge,
  Box,
  Divider,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return (
      <Box p={10}>
        <Text>No user data found.</Text>
      </Box>
    );
  }

  return (
    <Box bg="gray.50" minH="100vh" p={8}>
      <Heading mb={8} color="green.700">
        My Profile
      </Heading>

      <Box
        bg="white"
        p={8}
        rounded="xl"
        shadow="md"
        maxW="700px"
        mx="auto"
      >
        <VStack spacing={5}>
          <Avatar
            size="2xl"
            name={user.name}
          />

          <Heading size="md" color="green.700">{user.name}</Heading>

          <Badge
            colorScheme={
              user.role === "customer"
                ? "green"
                : "green"
            }
            px={3}
            py={1}
          >
            {user.role}
          </Badge>
        </VStack>

        <Divider my={8} />

        <SimpleGrid columns={2} spacing={6}>
          {/* <Box>
            <Text
              fontWeight="bold"
              color="gray.600"
            >
              User ID
            </Text>

            <Text color="gray.600">{user.id}</Text>
          </Box> */}

          <Box>
            <Text
              fontWeight="bold"
              color="gray.600"
            >
              Full Name
            </Text>

            <Text color="gray.600">{user.name}</Text>
          </Box>

          {/* <Box>
            <Text
              fontWeight="bold"
              color="gray.600"
            >
              Email
            </Text>

            <Text color="gray.600">{user.email}</Text>
          </Box> */}

          <Box>
            <Text
              fontWeight="bold"
              color="gray.600"
            >
              Role
            </Text>

            <Text color="gray.600">{user.role}</Text>
          </Box>

          <Box>
            <Text
              fontWeight="bold"
              color="gray.600"
            >
              Approval Status
            </Text>

            <Badge
              colorScheme={
                user.isApproved
                  ? "green"
                  : "orange"
              }
            >
              {user.isApproved
                ? "Approved"
                : "Pending"}
            </Badge>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Profile;
import {
  Flex,
  Box,
  Heading,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  Avatar,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function DashboardHeader() {
  return (
    <Flex justify="space-between" align="center" mb={8}>
      <Box>
        <Heading size="lg" color="green.700">Dashboard Overview</Heading>
        <Text color="gray.500">
          Welcome back, Admin.
        </Text>
      </Box>

      <Flex gap={4} align="center">
        <InputGroup w="300px" color="gray.500">
          <InputLeftElement>
            <SearchIcon color="gray.400" />
          </InputLeftElement>

          <Input
            placeholder="Search..."
            border="1px solid"
            borderColor="gray.300"
            _placeholder={{ color: "gray.400" }}
            bg="white"
            borderRadius="full"
          />
        </InputGroup>

        <Avatar
          name="Admin"
          bg="green.400"
          color="white"
        />
      </Flex>
    </Flex>
  );
}
import {
  Box,
  Avatar,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
  Badge,
} from "@chakra-ui/react";
import { FaStore, FaStar } from "react-icons/fa";

function SellerCard() {
  return (
    <Box
      bg="white"
      p={6}
      borderRadius="xl"
      shadow="md"
      borderWidth="1px"
    >
      <Box color="green.400" size="md" mb={5}>
        Seller Information
      </Box>

      <Flex justify="space-between" align="center">
        <HStack spacing={4}>
          <Avatar
            size="lg"
            name="Green Leaf Nursery"
            src="https://i.pravatar.cc/150?img=12"
          />

          <VStack align="start" spacing={1}>
            <HStack>
              <FaStore color="green" />
              <Text fontWeight="bold" color="green.700">
                Green Leaf Nursery
              </Text>
            </HStack>

            <Badge colorScheme="green">
              Verified Seller
            </Badge>

            <HStack spacing={1}>
              <FaStar color="#F6AD55" />
              <Text>4.8 Rating</Text>
            </HStack>

            <Text color="gray.500">
              520+ Orders Completed
            </Text>
          </VStack>
        </HStack>

        <Button colorScheme="green">
          Visit Store
        </Button>
      </Flex>
    </Box>
  );
}

export default SellerCard;
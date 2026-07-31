import {
  Avatar,
  Box,
  Divider,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Rahul",
    rating: 5,
    comment: "Healthy plant and fast delivery.",
  },
  {
    id: 2,
    name: "Anjali",
    rating: 4,
    comment: "Packaging was excellent.",
  },
  {
    id: 3,
    name: "David",
    rating: 5,
    comment: "Exactly as shown in the picture.",
  },
];

function ReviewSection() {
  return (
    <Box
      bg="white"
      p={6}
      borderRadius="xl"
      shadow="md"
      borderWidth="1px"
    >
      <Heading color="green.700" size="md" mb={6}>
        Customer Reviews
      </Heading>

      <VStack spacing={5} align="stretch">
        {reviews.map((review) => (
          <Box key={review.id}>
            <HStack align="start" spacing={4}>
              <Avatar name={review.name} />

              <Box flex={1}>
                <Text fontWeight="bold" color="green.700" mb={1}>
                  {review.name}
                </Text>

                <HStack mb={2}>
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar
                      key={i}
                      color="#F6AD55"
                    />
                  ))}
                </HStack>

                <Text color="gray.600" color="gray.600">
                  {review.comment}
                </Text>
              </Box>
            </HStack>

            <Divider mt={4} />
          </Box>
        ))}
      </VStack>
    </Box>
  );
}

export default ReviewSection;
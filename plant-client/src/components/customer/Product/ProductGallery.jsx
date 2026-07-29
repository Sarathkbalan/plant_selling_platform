import { useState } from "react";
import {
  Box,
  Image,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

export default function ProductGallery() {
  const images = [
    "https://images.unsplash.com/photo-1545241047-6083a3684587?w=800",
    "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800",
    "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=800",
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <Box>
      {/* Main Image */}
      <Box
        position="relative"
        borderRadius="2xl"
        overflow="hidden"
        bg="white"
        shadow="md"
      >
        <Image
          src={selectedImage}
          alt="Plant"
          w="100%"
          h={{ base: "350px", md: "500px" }}
          objectFit="cover"
        />

        {/* Favorite Button */}
        <IconButton
          icon={<FaHeart />}
          aria-label="Favorite"
          position="absolute"
          top={4}
          right={4}
          colorScheme="red"
          variant="solid"
          borderRadius="full"
        />
      </Box>

      {/* Thumbnails */}
      <HStack
        mt={5}
        spacing={4}
        justify="center"
      >
        {images.map((img, index) => (
          <Box
            key={index}
            cursor="pointer"
            borderRadius="lg"
            overflow="hidden"
            border={
              selectedImage === img
                ? "3px solid #38A169"
                : "2px solid #E2E8F0"
            }
            onClick={() => setSelectedImage(img)}
            transition="0.2s"
            _hover={{
              transform: "scale(1.05)",
            }}
          >
            <Image
              src={img}
              alt={`Thumbnail ${index + 1}`}
              w="90px"
              h="90px"
              objectFit="cover"
            />
          </Box>
        ))}
      </HStack>
    </Box>
  );
}
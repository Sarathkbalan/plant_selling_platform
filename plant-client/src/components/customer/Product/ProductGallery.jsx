import { useEffect, useState } from "react";
import {
  Box,
  Image,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

function ProductGallery({ plant }) {
  const images = plant?.imageUrl
    ? [`http://localhost:5078/${plant.imageUrl}`]
    : [];

  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (images.length > 0) {
      setSelectedImage(images[0]);
    }
  }, [plant]);

  if (!plant) return null;

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
          alt={plant.name}
          w="100%"
          h={{ base: "350px", md: "500px" }}
          objectFit="cover"
          fallbackSrc="https://via.placeholder.com/600x500?text=No+Image"
        />

        {/* Wishlist Button */}
        <IconButton
          icon={<FaHeart />}
          aria-label="Add to Wishlist"
          position="absolute"
          top={4}
          right={4}
          colorScheme="red"
          borderRadius="full"
        />
      </Box>

      {/* Thumbnail Images */}
      {images.length > 1 && (
        <HStack mt={5} spacing={4} justify="center">
          {images.map((img, index) => (
            <Box
              key={index}
              cursor="pointer"
              borderRadius="lg"
              overflow="hidden"
              border={
                selectedImage === img
                  ? "3px solid"
                  : "2px solid"
              }
              borderColor={
                selectedImage === img
                  ? "green.500"
                  : "gray.200"
              }
              onClick={() => setSelectedImage(img)}
              transition="0.2s"
              _hover={{
                transform: "scale(1.05)",
              }}
            >
              <Image
                src={img}
                alt={`${plant.name} ${index + 1}`}
                w="90px"
                h="90px"
                objectFit="cover"
              />
            </Box>
          ))}
        </HStack>
      )}
    </Box>
  );
}

export default ProductGallery;
// import {
//   Box,
//   Image,
//   Text,
//   Button,
//   VStack,
// } from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";

// function PlantCard({ plant }) {
//   const navigate = useNavigate();

//   return (
//     <Box
//       cursor="pointer"
//       borderWidth="1px"
//       borderRadius="lg"
//       overflow="hidden"
//       bg="white"
//       shadow="sm"
//       transition="0.2s"
//       _hover={{
//         transform: "translateY(-5px)",
//         shadow: "lg",
//       }}
//       onClick={() => navigate(`/plants/${plant.id}`)}
//     >
//       <Image
//         src={`http://localhost:5078/${plant.imageUrl}`}
//         h="220px"
//         w="100%"
//         objectFit="cover"
//       />

//       <VStack align="start" p={4}>
//         <Text fontWeight="bold" fontSize="lg">
//           {plant.name}
//         </Text>

//         <Text color="gray.500" noOfLines={2}>
//           {plant.description}
//         </Text>

//         <Text color="green.600" fontWeight="bold" fontSize="xl">
//           ₹{plant.price}
//         </Text>

//         <Button
//           colorScheme="green"
//           w="100%"
//           onClick={(e) => {
//             e.stopPropagation();
//             console.log("Add to Cart:", plant.id);
//           }}
//         >
//           Add to Cart
//         </Button>
//       </VStack>
//     </Box>
//   );
// }

// export default PlantCard;

// import {
//   Box,
//   Image,
//   Text,
//   Button,
//   VStack,
// } from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";

// function PlantCard({ plant }) {
//   const navigate = useNavigate();

//   const handleAddToCart = (e) => {
//     e.stopPropagation();

//     // TODO: Call your Add to Cart API here
//     console.log("Added to Cart:", plant.id);

//     // Navigate to Cart page
//     navigate("/cart");
//   };

//   return (
//     <Box
//       cursor="pointer"
//       borderWidth="1px"
//       borderRadius="lg"
//       overflow="hidden"
//       bg="white"
//       shadow="sm"
//       transition="0.2s"
//       _hover={{
//         transform: "translateY(-5px)",
//         shadow: "lg",
//       }}
//       onClick={() => navigate(`/plants/${plant.id}`)}
//     >
//       <Image
//         src={`http://localhost:5078/${plant.imageUrl}`}
//         h="220px"
//         w="100%"
//         objectFit="cover"
//       />

//       <VStack align="start" p={4}>
//         <Text fontWeight="bold" fontSize="lg">
//           {plant.name}
//         </Text>

//         <Text color="gray.500" noOfLines={2}>
//           {plant.description}
//         </Text>

//         <Text color="green.600" fontWeight="bold" fontSize="xl">
//           ₹{plant.price}
//         </Text>

//         <Button
//           colorScheme="green"
//           w="100%"
//           onClick={handleAddToCart}
//         >
//           Add to Cart
//         </Button>
//       </VStack>
//     </Box>
//   );
// }

// export default PlantCard;

import {
  Box,
  Image,
  Text,
  Button,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../services/cartService";

function PlantCard({ plant }) {
  const navigate = useNavigate();
  const toast = useToast();

 const handleAddToCart = async (e) => {
  e.stopPropagation();

  console.log("Plant ID:", plant.id);

  try {
    const response = await addToCart(plant.id, 1);

    console.log("API Success:", response);

    navigate("/cart");
  } catch (error) {
    console.log("Full Error:", error);
    console.log("Response:", error.response);
    console.log("Data:", error.response?.data);

    toast({
      title: "Failed",
      description: error.response?.data?.message || error.message,
      status: "error",
    });
  }
};

  return (
    <Box
      cursor="pointer"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      shadow="sm"
      transition="0.2s"
      _hover={{
        transform: "translateY(-5px)",
        shadow: "lg",
      }}
      onClick={() => navigate(`/plants/${plant.id}`)}
    >
      <Image
        src={`http://localhost:5078/${plant.imageUrl}`}
        h="220px"
        w="100%"
        objectFit="cover"
      />

      <VStack align="start" p={4}>
        <Text fontWeight="bold" fontSize="lg">
          {plant.name}
        </Text>

        <Text color="gray.500" noOfLines={2}>
          {plant.description}
        </Text>

        <Text color="green.600" fontWeight="bold" fontSize="xl">
          ₹{plant.price}
        </Text>

        <Button
          colorScheme="green"
          w="100%"
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </VStack>
    </Box>
  );
}

export default PlantCard;
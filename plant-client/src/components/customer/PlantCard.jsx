// import {
//   Box,
//   Image,
//   Text,
//   Button,
//   VStack,
// } from "@chakra-ui/react";
// import bgplant from "../../assets/plant bg.jpg";

// function PlantCard({ plant }) {
//   return (
//     <Box
//       borderWidth="1px"
//       borderRadius="lg"
//       overflow="hidden"
//       bg="white"
//       shadow="sm"
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

//         <Text
//           color="green.600"
//           fontWeight="bold"
//           fontSize="xl"
//         >
//           ₹{plant.price}
//         </Text>

//         <Button
//           colorScheme="green"
//           w="100%"
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
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function PlantCard({ plant }) {
  const navigate = useNavigate();

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
          onClick={(e) => {
            e.stopPropagation();
            console.log("Add to Cart:", plant.id);
          }}
        >
          Add to Cart
        </Button>
      </VStack>
    </Box>
  );
}

export default PlantCard;
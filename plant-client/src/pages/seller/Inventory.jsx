// import { useEffect, useState } from "react";
// import {
//   Box,
//   Heading,
//   Text,
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   Image,
//   Flex,
//   NumberInput,
//   NumberInputField,
//   Badge,
//   useToast,
// } from "@chakra-ui/react";
// import SellerLayout from "../../layouts/SellerLayout";
// import { getMyListings, updateStock } from "../../services/sellerPlantService";

// const LOW_STOCK_THRESHOLD = 5;

// export default function Inventory() {
//   const [plants, setPlants] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const toast = useToast();

//   useEffect(() => {
//     getMyListings()
//       .then(setPlants)
//       .catch(() => toast({ title: "Could not load inventory", status: "error" }))
//       .finally(() => setIsLoading(false));
//   }, []);

//   const handleStockChange = async (plant, nextStock) => {
//     try {
//       const updated = await updateStock(plant._id, nextStock);
//       setPlants((prev) => prev.map((p) => (p._id === plant._id ? updated : p)));
//     } catch (err) {
//       toast({ title: "Could not update stock", status: "error" });
//     }
//   };

//   const activePlants = plants.filter((p) => p.isActive);

//   return (
//     <SellerLayout>
//       <Heading size="lg" color="#1B4332" mb={1}>
//         Inventory
//       </Heading>
//       <Text color="#5B5B4F" mb={6}>
//         Keep stock levels current so customers only see what's actually available.
//       </Text>

//       <Box bg="white" borderRadius="xl" overflow="hidden" boxShadow="sm">
//         <Table variant="simple" size="sm">
//           <Thead bg="#F1EFE6">
//             <Tr>
//               <Th>Plant</Th>
//               <Th>Category</Th>
//               <Th isNumeric>Current Stock</Th>
//               <Th>Level</Th>
//             </Tr>
//           </Thead>
//           <Tbody>
//             {isLoading ? (
//               <Tr>
//                 <Td colSpan={4}>
//                   <Text textAlign="center" color="#8A8A78" py={6}>
//                     Loading inventory…
//                   </Text>
//                 </Td>
//               </Tr>
//             ) : activePlants.length === 0 ? (
//               <Tr>
//                 <Td colSpan={4}>
//                   <Text textAlign="center" color="#8A8A78" py={6}>
//                     No active listings to track yet.
//                   </Text>
//                 </Td>
//               </Tr>
//             ) : (
//               activePlants.map((plant) => (
//                 <Tr key={plant._id}>
//                   <Td>
//                     <Flex align="center" gap={3}>
//                       <Image
//                         src={plant.image}
//                         alt={plant.name}
//                         boxSize="40px"
//                         objectFit="cover"
//                         borderRadius="md"
//                       />
//                       <Text fontWeight="medium">{plant.name}</Text>
//                     </Flex>
//                   </Td>
//                   <Td>{plant.category}</Td>
//                   <Td isNumeric>
//                     <NumberInput
//                       size="sm"
//                       min={0}
//                       w="100px"
//                       value={plant.stock}
//                       onChange={(_, num) => handleStockChange(plant, Number.isNaN(num) ? 0 : num)}
//                     >
//                       <NumberInputField />
//                     </NumberInput>
//                   </Td>
//                   <Td>
//                     {plant.stock === 0 ? (
//                       <Badge colorScheme="red">Out of stock</Badge>
//                     ) : plant.stock <= LOW_STOCK_THRESHOLD ? (
//                       <Badge colorScheme="orange">Low stock</Badge>
//                     ) : (
//                       <Badge colorScheme="green">In stock</Badge>
//                     )}
//                   </Td>
//                 </Tr>
//               ))
//             )}
//           </Tbody>
//         </Table>
//       </Box>
//     </SellerLayout>
//   );
// }

import { Box, Heading, Text } from "@chakra-ui/react";

function Inventory() {
  return (
    <Box p={6}>
      <Heading mb={4}>Inventory</Heading>
      <Text>Inventory management page.</Text>
    </Box>
  );
}

export default Inventory;
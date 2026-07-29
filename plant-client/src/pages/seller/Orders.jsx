// import { useEffect, useState } from "react";
// import {
//   Box,
//   Heading,
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   Text,
//   Badge,
//   useToast,
// } from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";
// import SellerLayout from "../../components/seller/SellerLayout";
// import { getSellerOrders } from "../../services/sellerOrderService";

// const STATUS_COLORS = {
//   pending: "yellow",
//   processing: "blue",
//   shipped: "purple",
//   delivered: "green",
//   cancelled: "red",
// };

// export default function Orders() {
//   const [orders, setOrders] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const toast = useToast();
//   const navigate = useNavigate();

//   useEffect(() => {
//     getSellerOrders()
//       .then(setOrders)
//       .catch(() => toast({ title: "Could not load orders", status: "error" }))
//       .finally(() => setIsLoading(false));
//   }, []);

//   const itemsTotal = (items) => items.reduce((sum, i) => sum + i.price * i.quantity, 0);

//   return (
//     <SellerLayout>
//       <Heading size="lg" color="#1B4332" mb={6}>
//         Orders
//       </Heading>

//       <Box bg="white" borderRadius="xl" overflow="hidden" boxShadow="sm">
//         <Table variant="simple" size="sm">
//           <Thead bg="#F1EFE6">
//             <Tr>
//               <Th>Order</Th>
//               <Th>Customer</Th>
//               <Th isNumeric>Items</Th>
//               <Th isNumeric>Your Total</Th>
//               <Th>Status</Th>
//             </Tr>
//           </Thead>
//           <Tbody>
//             {isLoading ? (
//               <Tr>
//                 <Td colSpan={5}>
//                   <Text textAlign="center" color="#8A8A78" py={6}>
//                     Loading orders…
//                   </Text>
//                 </Td>
//               </Tr>
//             ) : orders.length === 0 ? (
//               <Tr>
//                 <Td colSpan={5}>
//                   <Text textAlign="center" color="#8A8A78" py={6}>
//                     No orders yet for your listings.
//                   </Text>
//                 </Td>
//               </Tr>
//             ) : (
//               orders.map((order) => (
//                 <Tr
//                   key={order._id}
//                   cursor="pointer"
//                   _hover={{ bg: "#FAF9F4" }}
//                   onClick={() => navigate(`/seller/orders/${order._id}`)}
//                 >
//                   <Td fontFamily="mono" fontSize="xs">
//                     {order._id.slice(-8)}
//                   </Td>
//                   <Td>{order.customer?.name ?? "—"}</Td>
//                   <Td isNumeric>{order.items.length}</Td>
//                   <Td isNumeric>${itemsTotal(order.items).toFixed(2)}</Td>
//                   <Td>
//                     <Badge colorScheme={STATUS_COLORS[order.status]}>{order.status}</Badge>
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

function Orders() {
  return (
    <Box p={6}>
      <Heading mb={4}>Orders</Heading>
      <Text>Seller Orders Page</Text>
    </Box>
  );
}

export default Orders;
// import { useEffect, useState } from "react";
// import {
//   Box,
//   Heading,
//   Text,
//   Flex,
//   VStack,
//   HStack,
//   Divider,
//   Image,
//   Select,
//   Badge,
//   Button,
//   useToast,
// } from "@chakra-ui/react";
// import { useNavigate, useParams } from "react-router-dom";
// import { ArrowLeft } from "lucide-react";
// import SellerLayout from "../..//layouts/SellerLayout";
// import { getOrderById } from "../../services/orderService";
// import { updateOrderStatus } from "../../services/sellerOrderService";

// const STATUS_OPTIONS = ["pending", "processing", "shipped", "delivered", "cancelled"];

// const STATUS_COLORS = {
//   pending: "yellow",
//   processing: "blue",
//   shipped: "purple",
//   delivered: "green",
//   cancelled: "red",
// };

// export default function OrderDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const toast = useToast();
//   const [order, setOrder] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isUpdating, setIsUpdating] = useState(false);

//   const loadOrder = () => {
//     setIsLoading(true);
//     getOrderById(id)
//       .then(setOrder)
//       .catch(() => toast({ title: "Could not load this order", status: "error" }))
//       .finally(() => setIsLoading(false));
//   };

//   useEffect(() => {
//     loadOrder();
//   }, [id]);

//   const handleStatusChange = async (nextStatus) => {
//     setIsUpdating(true);
//     try {
//       const updated = await updateOrderStatus(order._id, nextStatus);
//       setOrder((prev) => ({ ...prev, status: updated.status, statusHistory: updated.statusHistory }));
//       toast({ title: `Order marked ${nextStatus}`, status: "success", duration: 2000 });
//     } catch (err) {
//       toast({
//         title: err.response?.data?.message ?? "Could not update order",
//         status: "error",
//       });
//     } finally {
//       setIsUpdating(false);
//     }
//   };

//   const total = order?.items.reduce((sum, i) => sum + i.price * i.quantity, 0) ?? 0;

//   return (
//     <SellerLayout>
//       <Button
//         leftIcon={<ArrowLeft size={16} />}
//         variant="ghost"
//         size="sm"
//         mb={4}
//         onClick={() => navigate("/seller/orders")}
//       >
//         Back to Orders
//       </Button>

//       {isLoading ? (
//         <Text color="#8A8A78">Loading order…</Text>
//       ) : !order ? (
//         <Text color="#D64545">Order not found.</Text>
//       ) : (
//         <Box maxW="3xl">
//           <Flex justify="space-between" align="center">
//             <Heading size="lg" color="#1B4332">
//               Order #{order._id.slice(-8)}
//             </Heading>
//             <Badge fontSize="sm" colorScheme={STATUS_COLORS[order.status]}>
//               {order.status}
//             </Badge>
//           </Flex>

//           <Box bg="white" borderRadius="xl" p={6} boxShadow="sm" mt={6}>
//             <Text fontWeight="semibold" color="#1E1E16" mb={2}>
//               Customer
//             </Text>
//             <Text color="#5B5B4F" fontSize="sm">
//               {order.customer?.name} · {order.customer?.email}
//             </Text>

//             <Divider my={4} />

//             <Text fontWeight="semibold" color="#1E1E16" mb={2}>
//               Shipping Address
//             </Text>
//             <Text color="#5B5B4F" fontSize="sm">
//               {order.shippingAddress?.line1}, {order.shippingAddress?.city}{" "}
//               {order.shippingAddress?.postalCode}, {order.shippingAddress?.country}
//             </Text>

//             <Divider my={4} />

//             <Text fontWeight="semibold" color="#1E1E16" mb={3}>
//               Items
//             </Text>
//             <VStack align="stretch" spacing={3}>
//               {order.items.map((item) => (
//                 <HStack key={item.plant} justify="space-between">
//                   <HStack>
//                     <Image src={item.image} boxSize="44px" objectFit="cover" borderRadius="md" />
//                     <Box>
//                       <Text fontSize="sm" fontWeight="medium">
//                         {item.name}
//                       </Text>
//                       <Text fontSize="xs" color="#8A8A78">
//                         Qty {item.quantity} × ${item.price.toFixed(2)}
//                       </Text>
//                     </Box>
//                   </HStack>
//                   <Text fontSize="sm" fontWeight="medium">
//                     ${(item.price * item.quantity).toFixed(2)}
//                   </Text>
//                 </HStack>
//               ))}
//             </VStack>

//             <Divider my={4} />

//             <Flex justify="space-between">
//               <Text fontWeight="semibold">Total</Text>
//               <Text fontWeight="bold" color="#1B4332">
//                 ${total.toFixed(2)}
//               </Text>
//             </Flex>
//           </Box>

//           <Box bg="white" borderRadius="xl" p={6} boxShadow="sm" mt={6}>
//             <Text fontWeight="semibold" color="#1E1E16" mb={3}>
//               Update Status
//             </Text>
//             <Select
//               value={order.status}
//               onChange={(e) => handleStatusChange(e.target.value)}
//               isDisabled={isUpdating || order.status === "cancelled"}
//               w="220px"
//             >
//               {STATUS_OPTIONS.map((s) => (
//                 <option key={s} value={s}>
//                   {s}
//                 </option>
//               ))}
//             </Select>

//             {order.statusHistory?.length > 0 && (
//               <VStack align="stretch" spacing={1} mt={4}>
//                 {order.statusHistory.map((entry, idx) => (
//                   <Text key={idx} fontSize="xs" color="#8A8A78">
//                     {entry.status} — {new Date(entry.changedAt).toLocaleString()}
//                   </Text>
//                 ))}
//               </VStack>
//             )}
//           </Box>
//         </Box>
//       )}
//     </SellerLayout>
//   );
// }
import { Box, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

function OrderDetails() {
  const { id } = useParams();

  return (
    <Box p={6}>
      <Heading mb={4}>Order Details</Heading>

      <Text>
        Order ID: {id}
      </Text>
    </Box>
  );
}

export default OrderDetails;
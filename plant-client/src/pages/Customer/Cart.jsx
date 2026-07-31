import { useEffect, useMemo, useState } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  Button,
  IconButton,
  Divider,
  Flex,
  Spinner,
  Center,
  useToast,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon, DeleteIcon } from "@chakra-ui/icons";

import {
  getCart,
  updateCart,
  removeCartItem,
  clearCart,
} from "../../services/cartService";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const toast = useToast();

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    try {
      setLoading(true);

      const { data } = await getCart();
      console.log(data);

      setCartItems(data);
    } catch (err) {
      console.error(err);

      toast({
        title: "Failed to load cart",
        status: "error",
      });
    } finally {
      setLoading(false);
    }
  };
  

  const changeQuantity = async (item, quantity) => {
    if (quantity <= 0) return;

    try {
      await updateCart(item.id, quantity);
      loadCart();
    } catch (err) {
      console.error(err);
    }
  };

  const removeItem = async (id) => {
    try {
      await removeCartItem(id);

      toast({
        title: "Item removed",
        status: "success",
      });

      loadCart();
    } catch (err) {
      console.error(err);
    }
  };

  const clearAll = async () => {
    try {
      await clearCart();

      toast({
        title: "Cart cleared",
        status: "success",
      });

      loadCart();
    } catch (err) {
      console.error(err);
    }
  };

  const total = useMemo(() => {
    return cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  if (loading) {
    return (
      <Center h="70vh">
        <Spinner size="xl" color="green.500" />
      </Center>
    );
  }

  return (
    <Box bg="gray.50" minH="100vh" p={8}>
      <Heading mb={6} color="green.700">
        Shopping Cart
      </Heading>

      {cartItems.length === 0 ? (
        <Box
          bg="white"
          p={10}
          rounded="lg"
          shadow="md"
          textAlign="center"
        >
          <Text fontSize="lg" color="gray.500">
            Your cart is empty.
          </Text>
        </Box>
      ) : (
        <Flex
          gap={8}
          direction={{ base: "column", lg: "row" }}
          align="flex-start"
        >
          <VStack flex="3" spacing={5} w="100%">
            {cartItems.map((item) => (
              <Box
                key={item.id}
                bg="white"
                shadow="md"
                rounded="lg"
                p={5}
                w="100%"
              >
                <HStack spacing={5}>
                  <Image
                    src={`http://localhost:5078/${item.imageUrl}`}
                    boxSize="120px"
                    objectFit="cover"
                    rounded="md"
                  />

                  <Box flex="1">
                    <Heading color="green.700" size="md">
                      {item.plantName}
                    </Heading>

                    <Text
                      color="green.600"
                      fontWeight="bold"
                      mt={2}
                    >
                      ₹{item.price}
                    </Text>

                    <HStack mt={4}>
                      <IconButton
                        icon={<MinusIcon />}
                        size="sm"
                        aria-label="Decrease"
                        onClick={() =>
                          changeQuantity(
                            item,
                            item.quantity - 1
                          )
                        }
                      />

                      <Text fontWeight="bold" color="green.600">
                        {item.quantity}
                      </Text>

                      <IconButton
                        icon={<AddIcon />}
                        size="sm"
                        aria-label="Increase"
                        onClick={() =>
                          changeQuantity(
                            item,
                            item.quantity + 1
                          )
                        }
                      />
                    </HStack>
                  </Box>

                  <IconButton
                    icon={<DeleteIcon />}
                    colorScheme="red"
                    aria-label="Remove"
                    onClick={() => removeItem(item.id)}
                  />
                </HStack>
              </Box>
            ))}
          </VStack>

          <Box
            flex="1"
            bg="white"
            shadow="md"
            rounded="lg"
            p={6}
          >
            <Heading size="md" color="green.700" mb={4}>
              Order Summary
            </Heading>

            <Divider mb={4} />

            <Flex justify="space-between" mb={2}>
              <Text color="green.700">Items</Text>
              <Text color="green.600">{cartItems.length}</Text>
            </Flex>

            <Flex justify="space-between">
              <Text color="green.700">Total</Text>

              <Text
                color="green.600"
                fontWeight="bold"
              >
                ₹{total}
              </Text>
            </Flex>

            <Button
              colorScheme="green"
              w="100%"
              mt={6}
            >
              Proceed to Checkout
            </Button>

            <Button
              variant="outline"
              colorScheme="red"
              w="100%"
              mt={3}
              onClick={clearAll}
            >
              Clear Cart
            </Button>
          </Box>
        </Flex>
      )}
    </Box>
  );
}

export default Cart;
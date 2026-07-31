import {
  Flex,
  Box,
  Link,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Avatar,
  HStack,
  Button,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { getCart } from "../../services/cartService";

export default function Navbar({ activeLink = "Browse" }) {
  const navigate = useNavigate();

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    loadCartCount();

    // Refresh count every second
    const interval = setInterval(loadCartCount, 1000);

    return () => clearInterval(interval);
  }, []);

  const loadCartCount = async () => {
    try {
      const { data } = await getCart();

      const totalItems = data.reduce(
        (sum, item) => sum + item.quantity,
        0
      );

      setCartCount(totalItems);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={20}
      bg="#FAF9F4"
      borderBottom="1px solid"
      borderColor="blackAlpha.100"
    >
      <Flex
        maxW="7xl"
        mx="auto"
        align="center"
        gap={6}
        px={6}
        py={4}
      >
        {/* Logo */}
        <Link
          as={RouterLink}
          to="/home"
          fontSize="2xl"
          fontWeight="bold"
          color="#1B4332"
          _hover={{ textDecoration: "none" }}
        >
          LeafNode
        </Link>

        {/* Search */}
        <Box flex="1" maxW="md">
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon
                as={Search}
                boxSize={4}
                color="gray.500"
              />
            </InputLeftElement>

            <Input
              placeholder="Search plants..."
              borderRadius="full"
              bg="gray.100"
            />
          </InputGroup>
        </Box>

        {/* Menu */}
        <HStack
          spacing={6}
          flex="1"
          display={{ base: "none", md: "flex" }}
        >
          <Link
            as={RouterLink}
            to="/home"
            color={
              activeLink === "Browse"
                ? "green.700"
                : "gray.600"
            }
          >
            Browse
          </Link>

          <Link
            as={RouterLink}
            to="/orders"
            color={
              activeLink === "Orders"
                ? "green.700"
                : "gray.600"
            }
          >
            Orders
          </Link>
        </HStack>

        {/* Right */}
        <HStack spacing={5}>
          {/* Cart */}
          <Link
            as={RouterLink}
            to="/cart"
            position="relative"
          >
            <Icon
              color="green.700"
              as={ShoppingCart}
              boxSize={6}
            />

            {cartCount > 0 && (
              <Flex
                position="absolute"
                top="-8px"
                right="-8px"
                bg="red.500"
                color="white"
                borderRadius="full"
                w={5}
                h={5}
                justify="center"
                align="center"
                fontSize="11px"
                fontWeight="bold"
              >
                {cartCount}
              </Flex>
            )}
          </Link>

          {/* Profile */}
          <Link
            as={RouterLink}
            to="/profile"
          >
            <Avatar
            borderColor="green.400"
              borderWidth="2px"
              name="John Doe"
              size="sm"
              src="/assets/avatar.jpg"
            />
          </Link>

          {/* Logout */}
          <Button
            leftIcon={<LogOut size={16} />}
            colorScheme="red"
            variant="outline"
            size="sm"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}
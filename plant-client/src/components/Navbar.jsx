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
} from "@chakra-ui/react";
import { Search, ShoppingCart, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar({ cartCount = 0, activeLink = "Browse" }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user"); // if you store user info
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
      <Flex maxW="7xl" mx="auto" align="center" gap={6} px={6} py={4}>
        <Link
          href="/"
          fontSize="2xl"
          fontWeight="bold"
          color="#1B4332"
          letterSpacing="tight"
          flexShrink={0}
          _hover={{ textDecoration: "none" }}
        >
          LeafNode
        </Link>

        <Box flex="1" maxW="md">
          <InputGroup>
            <InputLeftElement pointerEvents="none" h="full" pl={2}>
              <Icon as={Search} boxSize={4} color="#8A8A78" />
            </InputLeftElement>
            <Input
              placeholder="Search for your next plant..."
              bg="#F1EFE6"
              border="none"
              borderRadius="full"
              pl={9}
              fontSize="sm"
              _placeholder={{ color: "#9B9B8A" }}
              _focusVisible={{ boxShadow: "0 0 0 2px #1B433255" }}
            />
          </InputGroup>
        </Box>

        <HStack
          flex="1"
          spacing={6}
          fontSize="sm"
          fontWeight="medium"
          display={{ base: "none", md: "flex" }}
        >
          {["Browse", "Orders"].map((link) => (
            <Link
              key={link}
              href={`/${link.toLowerCase()}`}
              color={link === activeLink ? "#1B4332" : "#5B5B4F"}
              borderBottom={
                link === activeLink
                  ? "2px solid #1B4332"
                  : "2px solid transparent"
              }
              pb={1}
              _hover={{ color: "#1B4332", textDecoration: "none" }}
            >
              {link}
            </Link>
          ))}
        </HStack>

        <HStack spacing={4}>
          <Link href="/cart" position="relative">
            <Icon as={ShoppingCart} boxSize={5} color="#2B2B22" />
            {cartCount > 0 && (
              <Flex
                position="absolute"
                top="-8px"
                right="-8px"
                bg="#D64545"
                color="white"
                fontSize="10px"
                fontWeight="semibold"
                borderRadius="full"
                w={4}
                h={4}
                align="center"
                justify="center"
              >
                {cartCount}
              </Flex>
            )}
          </Link>

          <Link href="/profile">
            <Avatar
              src="/assets/avatar.jpg"
              boxSize="36px"
              ring="2px"
              ringColor="#A9E5A0"
            />
          </Link>

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
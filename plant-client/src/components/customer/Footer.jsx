
import { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  Input,
  Button,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";

const SHOP_LINKS = ["All Plants", "Best Sellers", "New Arrivals", "Plant Care Kits"];
const SUPPORT_LINKS = ["Shipping Policy", "Return & Refund", "FAQs", "Contact Us"];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleJoin = (e) => {
    e.preventDefault();
    // Hook this up to a real newsletter endpoint when one exists.
    setEmail("");
  };

  return (
    <Box as="footer" bg="#F1EFE6">
      <SimpleGrid
        columns={{ base: 1, md: 4 }}
        spacing={10}
        maxW="7xl"
        mx="auto"
        px={6}
        py={14}
      >
        <Box>
          <Heading as="h2" size="md" color="#1B4332">
            LeafNode
          </Heading>
          <Text fontSize="sm" color="#5B5B4F" mt={3} lineHeight="tall" maxW="xs">
            Making the world greener, one plant at a time. High-quality botanical
            selections delivered to your doorstep.
          </Text>
        </Box>

        <Box>
          <Heading as="h3" size="sm" color="#1E1E16">
            Shop
          </Heading>
          <VStack align="start" spacing={2} mt={3} fontSize="sm" color="#5B5B4F">
            {SHOP_LINKS.map((link) => (
              <Link key={link} href="#" _hover={{ color: "#1B4332" }}>
                {link}
              </Link>
            ))}
          </VStack>
        </Box>

        <Box>
          <Heading as="h3" size="sm" color="#1E1E16">
            Support
          </Heading>
          <VStack align="start" spacing={2} mt={3} fontSize="sm" color="#5B5B4F">
            {SUPPORT_LINKS.map((link) => (
              <Link key={link} href="#" _hover={{ color: "#1B4332" }}>
                {link}
              </Link>
            ))}
          </VStack>
        </Box>

        <Box>
          <Heading as="h3" size="sm" color="#1E1E16">
            Newsletter
          </Heading>
          <Text fontSize="sm" color="#5B5B4F" mt={3}>
            Join our green community for tips and exclusive offers.
          </Text>
          <Flex as="form" onSubmit={handleJoin} mt={4} gap={2}>
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              bg="white"
              borderRadius="full"
              fontSize="sm"
              border="1px solid"
              borderColor="blackAlpha.200"
              _focusVisible={{ boxShadow: "0 0 0 2px #1B433255" }}
            />
            <Button
              type="submit"
              bg="#1B4332"
              color="white"
              fontSize="sm"
              fontWeight="medium"
              borderRadius="full"
              px={5}
              flexShrink={0}
              _hover={{ bg: "#163829" }}
            >
              Join
            </Button>
          </Flex>
        </Box>
      </SimpleGrid>

      <Box borderTop="1px solid" borderColor="blackAlpha.200">
        <Text maxW="7xl" mx="auto" px={6} py={5} fontSize="sm" color="#8A8A78">
          © {new Date().getFullYear()} LeafNode. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
}
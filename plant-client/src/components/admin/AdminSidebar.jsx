import {
  Box,
  VStack,
  Text,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaStore,
  FaLeaf,
  FaList,
  FaChartBar,
  FaSignOutAlt,
} from "react-icons/fa";

const menuItems = [
  {
    name: "Dashboard",
    icon: FaTachometerAlt,
    path: "/admin",
  },
  {
    name: "Users",
    icon: FaUsers,
    path: "/admin/users",
  },
  {
    name: "Sellers",
    icon: FaStore,
    path: "/admin/sellers",
  },
  {
    name: "Categories",
    icon: FaList,
    path: "/admin/categories",
  },
  {
    name: "Plants",
    icon: FaLeaf,
    path: "/admin/plants",
  },
  {
    name: "Reports",
    icon: FaChartBar,
    path: "/admin/reports",
  },
];

export default function AdminSidebar() {
  return (
    <Box
      w="260px"
      minH="100vh"
      bg="green.700"
      color="white"
      p={5}
      position="sticky"
      top="0"
    >
      <Text
        fontSize="2xl"
        fontWeight="bold"
        mb={10}
        textAlign="center"
      >
        🌿 LeafNode
      </Text>

      <VStack spacing={2} align="stretch">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            style={{ textDecoration: "none" }}
          >
            {({ isActive }) => (
              <Flex
                align="center"
                p={3}
                borderRadius="md"
                bg={isActive ? "green.500" : "transparent"}
                _hover={{
                  bg: "green.600",
                }}
                cursor="pointer"
              >
                <Icon
                  as={item.icon}
                  mr={4}
                  boxSize={5}
                />

                <Text fontWeight="medium">
                  {item.name}
                </Text>
              </Flex>
            )}
          </NavLink>
        ))}
      </VStack>

      <Box mt={10}>
        <NavLink
          to="/"
          style={{ textDecoration: "none" }}
        >
          <Flex
            align="center"
            p={3}
            borderRadius="md"
            _hover={{
              bg: "red.500",
            }}
            cursor="pointer"
          >
            <Icon
              as={FaSignOutAlt}
              mr={4}
              boxSize={5}
            />

            <Text>Logout</Text>
          </Flex>
        </NavLink>
      </Box>
    </Box>
  );
}
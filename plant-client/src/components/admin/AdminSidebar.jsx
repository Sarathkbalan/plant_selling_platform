import {
  Box,
  VStack,
  Text,
  Icon,
  Flex,
  Button,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaStore,
  FaLeaf,
  FaList,
  FaChartBar,
  FaPlus,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const menuItems = [
  {
    name: "Dashboard",
    icon: FaTachometerAlt,
    path: "/admin",
  },
  {
    name: "Plants",
    icon: FaLeaf,
    path: "/admin/plants",
  },
  {
    name: "Sellers",
    icon: FaStore,
    path: "/admin/sellers",
  },
  {
    name: "Users",
    icon: FaUsers,
    path: "/admin/users",
  },
  {
    name: "Categories",
    icon: FaList,
    path: "/admin/categories",
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
      w="270px"
      bg="white"
      minH="100vh"
      borderRight="1px solid"
      borderColor="gray.200"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      py={8}
    >
      {/* Top */}
      <Box>
        <Box px={6} mb={10}>
          <Text
            fontSize="4xl"
            fontWeight="bold"
            color="green.700"
          >
            LeafNode
          </Text>

          <Text
            color="gray.500"
            fontSize="sm"
          >
            Management Portal
          </Text>
        </Box>

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
                  gap={4}
                  px={6}
                  py={4}
                  bg={
                    isActive
                      ? "green.50"
                      : "transparent"
                  }
                  borderLeft={
                    isActive
                      ? "4px solid"
                      : "4px solid transparent"
                  }
                  borderColor="green.600"
                  color={
                    isActive
                      ? "green.700"
                      : "gray.700"
                  }
                  _hover={{
                    bg: "gray.50",
                  }}
                  transition=".2s"
                >
                  <Icon
                    as={item.icon}
                    boxSize={5}
                  />

                  <Text fontWeight="600">
                    {item.name}
                  </Text>
                </Flex>
              )}
            </NavLink>
          ))}
        </VStack>
      </Box>

      {/* Bottom */}
      <Box px={4}>
      

        <NavLink
          to="/admin/settings"
          style={{ textDecoration: "none" }}
        >
          <Flex
            align="center"
            px={3}
            py={3}
            color="gray.700"
            _hover={{ bg: "gray.100" }}
            borderRadius="lg"
          >
            <Icon
              as={FaCog}
              mr={4}
            />
            <Text fontWeight="500">
              Settings
            </Text>
          </Flex>
        </NavLink>

        <NavLink
          to="/"
          style={{ textDecoration: "none" }}
        >
          <Flex
            align="center"
            px={3}
            py={3}
            color="gray.700"
            _hover={{
              bg: "red.50",
              color: "red.500",
            }}
            borderRadius="lg"
          >
            <Icon
              as={FaSignOutAlt}
              mr={4}
            />
            <Text fontWeight="500">
              Logout
            </Text>
          </Flex>
        </NavLink>
      </Box>
    </Box>
  );
}
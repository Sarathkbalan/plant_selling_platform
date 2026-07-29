import { Box, VStack, Heading, Button, Spacer } from "@chakra-ui/react";
import {
  LayoutDashboard,
  Sprout,
  PlusCircle,
  ShoppingBag,
  Boxes,
  User,
  LogOut,
} from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/seller" },
  { name: "My Plants", icon: Sprout, path: "/seller/plants" },
  { name: "Add Plant", icon: PlusCircle, path: "/seller/add" },
  { name: "Orders", icon: ShoppingBag, path: "/seller/orders" },
  { name: "Inventory", icon: Boxes, path: "/seller/inventory" },
  { name: "Profile", icon: User, path: "/seller/profile" },
];

function SellerSidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isItemActive = (path) =>
    path === "/seller"
      ? location.pathname === "/seller"
      : location.pathname.startsWith(path);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user"); // Remove if you store user data
    navigate("/");
  };

  return (
    <Box
      w="250px"
      minH="100vh"
      bg="white"
      borderRight="1px solid"
      borderColor="gray.200"
      p={5}
      display="flex"
      flexDirection="column"
    >
      <Heading size="lg" color="green.500" mb={8}>
        Seller Panel
      </Heading>

      <VStack spacing={2} align="stretch">
        {menuItems.map((item) => {
          const active = isItemActive(item.path);

          return (
            <Button
              key={item.path}
              as={NavLink}
              to={item.path}
              end={item.path === "/seller"}
              justifyContent="flex-start"
              leftIcon={<item.icon size={18} />}
              variant="ghost"
              bg={active ? "green.500" : "transparent"}
              color={active ? "white" : "gray.700"}
              _hover={{ bg: active ? "green.500" : "green.50" }}
            >
              {item.name}
            </Button>
          );
        })}
      </VStack>

      <Spacer />

      <Button
        leftIcon={<LogOut size={18} />}
        colorScheme="green"
        // variant="outline"
        size="lg"
        borderradius="xl"
        justifyContent="flex-start"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </Box>
  );
}

export default SellerSidebar;
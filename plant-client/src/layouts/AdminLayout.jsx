import { Flex, Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar";

export default function AdminLayout() {
  return (
    <Flex bg="gray.100" minH="100vh">
      <AdminSidebar />

      <Box flex="1" p={6}>
        <Outlet />
      </Box>
    </Flex>
  );
}
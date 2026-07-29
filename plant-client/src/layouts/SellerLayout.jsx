import { Outlet } from "react-router-dom";
import SellerSidebar from "../components/seller/SellerSidebar";
import { Box, Flex } from "@chakra-ui/react";

function SellerLayout() {
  return (
    <Flex>
      <SellerSidebar />
      <Box flex="1" p={6} bg="gray.400" minH="100vh">
        
        <Outlet />
      </Box>
    </Flex>
  );
}

export default SellerLayout;
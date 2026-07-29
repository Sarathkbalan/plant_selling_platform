import {
  Box,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import AdminHeader from "../../components/admin/AdminHeader";
import DataTable from "../../components/admin/DataTable";
import StatusBadge from "../../components/admin/StatusBadge";

import { getSellers } from "../../services/adminService";

export default function Seller() {
  const [sellers, setSellers] = useState([]);
  const toast = useToast();

  useEffect(() => {
    fetchSellers();
  }, []);

  const fetchSellers = async () => {
    try {
      const data = await getSellers();
      setSellers(data);
    } catch (error) {
      toast({
        title: "Failed to load sellers",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const columns = [
    {
      header: "ID",
      accessor: "id",
    },
    {
      header: "Name",
      accessor: "name",
    },
    {
      header: "Email",
      accessor: "email",
    },
    {
      header: "Status",
      accessor: "isApproved",
      Cell: (row) => (
        <StatusBadge
          status={row.isApproved ? "Approved" : "Pending"}
        />
      ),
    },
  ];

  return (
    <Box bg="gray.50" minH="100vh" p={8}>
      <AdminHeader title="Seller Management" />

      <Text color="gray.500" mt={2} mb={6}>
        View, approve and manage all registered sellers.
      </Text>

      <Box
        bg="white"
        borderRadius="2xl"
        boxShadow="lg"
        border="1px solid"
        borderColor="gray.200"
        p={6}
      >
        <DataTable
          columns={columns}
          data={sellers}
        />
      </Box>
    </Box>
  );
}
import {
  Box,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import AdminHeader from "../../components/admin/AdminHeader";
import DataTable from "../../components/admin/DataTable";

import { getCustomers } from "../../services/adminService";

export default function User() {
  const [users, setUsers] = useState([]);
  const toast = useToast();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const data = await getCustomers();
      setUsers(data);
    } catch (error) {
      toast({
        title: "Failed to load users",
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
  ];

  return (
    <Box bg="gray.50" minH="100vh" p={8}>
      <AdminHeader title="User Management" />

      <Text color="gray.500" mt={2} mb={6}>
        View and manage all registered customers on the platform.
      </Text>

      <Box
        bg="white"
        p={6}
        borderRadius="2xl"
        boxShadow="lg"
        border="1px solid"
        borderColor="gray.200"
      >
        <DataTable
          columns={columns}
          data={users}
        />
      </Box>
    </Box>
  );
}
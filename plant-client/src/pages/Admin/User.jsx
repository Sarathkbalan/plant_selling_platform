import { Box, useToast } from "@chakra-ui/react";
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
    <Box p={6}>
      <AdminHeader title="Users" />

      <DataTable
        columns={columns}
        data={users}
      />
    </Box>
  );
}
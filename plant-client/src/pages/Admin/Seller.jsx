import {
  Box,
  Text,
  Button,
  HStack,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import AdminHeader from "../../components/admin/AdminHeader";
import DataTable from "../../components/admin/DataTable";
import StatusBadge from "../../components/admin/StatusBadge";

import {
  getSellers,
  approveSeller,
  rejectSeller,
  deleteSeller,
} from "../../services/adminService";

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

  const handleApprove = async (id) => {
    try {
      await approveSeller(id);

      toast({
        title: "Seller Approved",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      fetchSellers();
    } catch (error) {
      toast({
        title: "Approval Failed",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleReject = async (id) => {
    try {
      await rejectSeller(id);

      toast({
        title: "Seller Rejected",
        status: "info",
        duration: 3000,
        isClosable: true,
      });

      fetchSellers();
    } catch (error) {
      toast({
        title: "Reject Failed",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  const handleDelete = async (id) => {
  if (!window.confirm("Are you sure you want to delete this seller?")) {
    return;
  }

  try {
    await deleteSeller(id);

    toast({
      title: "Seller Deleted",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    fetchSellers();
  } catch (error) {
    toast({
      title: "Delete Failed",
      description:
        error.response?.data?.message || "Unable to delete seller.",
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
    {
      header: "Action",
      accessor: "action",
     Cell: (row) => (
  <HStack spacing={2}>
    {!row.isApproved ? (
      <Button
        colorScheme="green"
        size="sm"
        onClick={() => handleApprove(row.id)}
      >
        Approve
      </Button>
    ) : (
      <Button
        colorScheme="yellow"
        size="sm"
        onClick={() => handleReject(row.id)}
      >
        Reject
      </Button>
    )}

    <Button
      colorScheme="red"
      size="sm"
      onClick={() => handleDelete(row.id)}
    >
      Delete
    </Button>
  </HStack>
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
        <DataTable columns={columns} data={sellers} />
      </Box>
    </Box>
  );
}
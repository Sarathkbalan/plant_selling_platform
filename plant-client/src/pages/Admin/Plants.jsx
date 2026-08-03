
import { Box, Text, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AdminHeader from "../../components/admin/AdminHeader";
import DataTable from "../../components/admin/DataTable";
import {
  getAllPlants,
  deletePlant,
} from "../../services/adminService";

export default function Plants() {
  const [plants, setPlants] = useState([]);

  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    loadPlants();
  }, []);

  const loadPlants = async () => {
    try {
      const data = await getAllPlants();
      setPlants(data);
    } catch (error) {
      console.error(error);

      toast({
        title: "Failed to load plants",
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
      header: "Image",
      accessor: "imageUrl",
      Cell: (row) => (
        <img
          src={`http://localhost:5078${row.imageUrl}`}
          alt={row.name}
          width="60"
          height="60"
          style={{
            borderRadius: "8px",
            objectFit: "cover",
          }}
        />
      ),
    },
    {
      header: "Plant Name",
      accessor: "name",
    },
    {
      header: "Category",
      accessor: "categoryName",
    },
    {
      header: "Price",
      accessor: "price",
      Cell: (row) => `₹${row.price}`,
    },
    {
      header: "Stock",
      accessor: "stock",
    },
  ];

  const handleAdd = () => {
    navigate("/admin/plants/add");
  };

  const handleEdit = (plant) => {
    navigate(`/admin/plants/edit/${plant.id}`);
  };

  const handleDelete = async (plant) => {
    if (!window.confirm(`Delete "${plant.name}"?`)) return;

    try {
      await deletePlant(plant.id);

      setPlants((prev) =>
        prev.filter((p) => p.id !== plant.id)
      );

      toast({
        title: "Plant deleted",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error(error);

      toast({
        title: "Delete failed",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box bg="gray.50" minH="100vh" p={8}>
      <AdminHeader
        title="Plant Management"
        buttonText="Add Plant"
        onClick={handleAdd}
      />

      <Text color="gray.500" mt={2} mb={6}>
        Manage all plants available on the platform.
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
          data={plants}
          actions={{
            onEdit: handleEdit,
            onDelete: handleDelete,
          }}
        />
      </Box>
    </Box>
  );
}
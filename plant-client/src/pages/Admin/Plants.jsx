import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";

import AdminHeader from "../../components/admin/AdminHeader";
import DataTable from "../../components/admin/DataTable";

export default function Plants() {
  const [plants] = useState([
    {
      id: 1,
      name: "Rose",
      price: 250,
      stock: 20,
    },
    {
      id: 2,
      name: "Aloe Vera",
      price: 300,
      stock: 10,
    },
  ]);

  const columns = [
    {
      header: "ID",
      accessor: "id",
    },
    {
      header: "Plant Name",
      accessor: "name",
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
    console.log("Add Plant");
  };

  const handleEdit = (plant) => {
    console.log("Edit", plant);
  };

  const handleDelete = (plant) => {
    console.log("Delete", plant);
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
import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";

import AdminHeader from "../../components/admin/AdminHeader";
import DataTable from "../../components/admin/DataTable";

export default function Categories() {
  const [categories] = useState([
    { id: 1, name: "Flower" },
    { id: 2, name: "Indoor" },
    { id: 3, name: "Outdoor" },
  ]);

  const columns = [
    {
      header: "ID",
      accessor: "id",
    },
    {
      header: "Category Name",
      accessor: "name",
    },
  ];

  const handleAdd = () => {
    console.log("Add Category");
  };

  const handleEdit = (category) => {
    console.log("Edit", category);
  };

  const handleDelete = (category) => {
    console.log("Delete", category);
  };

  return (
    <Box bg="gray.50" minH="100vh" p={8}>
      <AdminHeader
        title="Category Management"
        buttonText="Add Category"
        onClick={handleAdd}
      />

      <Text color="gray.500" mt={2} mb={6}>
        Create, update and manage plant categories.
      </Text>

      <Box
        bg="white"
        borderRadius="xl"
        boxShadow="md"
        p={6}
        border="1px solid"
        borderColor="gray.200"
      >
        <DataTable
          columns={columns}
          data={categories}
          actions={{
            onEdit: handleEdit,
            onDelete: handleDelete,
          }}
        />
      </Box>
    </Box>
  );
}
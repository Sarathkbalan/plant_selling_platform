import { Box } from "@chakra-ui/react";
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
    <Box p={6}>
      <AdminHeader
        title="Categories"
        buttonText="Add Category"
        onClick={handleAdd}
      />

      <DataTable
        columns={columns}
        data={categories}
        actions={{
          onEdit: handleEdit,
          onDelete: handleDelete,
        }}
      />
    </Box>
  );
}
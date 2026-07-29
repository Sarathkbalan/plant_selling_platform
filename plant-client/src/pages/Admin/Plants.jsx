import { Box } from "@chakra-ui/react";
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
    <Box p={6}>
      <AdminHeader
        title="Plants"
        buttonText="Add Plant"
        onClick={handleAdd}
      />

      <DataTable
        columns={columns}
        data={plants}
        actions={{
          onEdit: handleEdit,
          onDelete: handleDelete,
        }}
      />
    </Box>
  );
}
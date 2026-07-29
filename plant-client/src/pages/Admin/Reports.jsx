import { Box, SimpleGrid } from "@chakra-ui/react";
import {
  FaRupeeSign,
  FaShoppingCart,
  FaLeaf,
  FaStore,
} from "react-icons/fa";

import AdminHeader from "../../components/admin/AdminHeader";
import DashboardCard from "../../components/admin/DashboardCard";

export default function Reports() {
  const reports = [
    {
      title: "Total Revenue",
      value: "₹35,000",
      icon: FaRupeeSign,
      color: "green.500",
    },
    {
      title: "Total Orders",
      value: 250,
      icon: FaShoppingCart,
      color: "purple.500",
    },
    {
      title: "Plants Sold",
      value: 520,
      icon: FaLeaf,
      color: "teal.500",
    },
    {
      title: "Top Sellers",
      value: "Green Garden",
      icon: FaStore,
      color: "orange.500",
    },
  ];

  return (
    <Box p={6}>
      <AdminHeader title="Reports" />

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        spacing={6}
      >
        {reports.map((report) => (
          <DashboardCard
            key={report.title}
            title={report.title}
            value={report.value}
            icon={report.icon}
            color={report.color}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
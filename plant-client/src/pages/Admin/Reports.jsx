import {
  Box,
  SimpleGrid,
  Text,
  Heading,
} from "@chakra-ui/react";
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
      bg: "green.50",
      subtitle: "+12% this month",
    },
    {
      title: "Total Orders",
      value: 250,
      icon: FaShoppingCart,
      color: "purple.500",
      bg: "purple.50",
      subtitle: "18 Today",
    },
    {
      title: "Plants Sold",
      value: 520,
      icon: FaLeaf,
      color: "teal.500",
      bg: "teal.50",
      subtitle: "Best Seller",
    },
    {
      title: "Top Seller",
      value: "Green Garden",
      icon: FaStore,
      color: "orange.500",
      bg: "orange.50",
      subtitle: "Highest Revenue",
    },
  ];

  return (
    <Box bg="gray.50" minH="100vh" p={8}>
      <AdminHeader title="Reports & Analytics" />

      <Text color="gray.500" mt={2} mb={8}>
        View business performance, revenue, orders, and sales statistics.
      </Text>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        spacing={6}
        mb={8}
      >
        {reports.map((report) => (
          <DashboardCard
            key={report.title}
            title={report.title}
            value={report.value}
            subtitle={report.subtitle}
            icon={report.icon}
            color={report.color}
            bg={report.bg}
          />
        ))}
      </SimpleGrid>

      <Box
        bg="white"
        borderRadius="2xl"
        p={8}
        boxShadow="lg"
        border="1px solid"
        borderColor="gray.200"
      >
        <Heading size="md" mb={4}>
          Sales Overview
        </Heading>

        <Text color="gray.500">
          Sales charts, revenue analytics, and monthly reports will be displayed
          here.
        </Text>
      </Box>
    </Box>
  );
}
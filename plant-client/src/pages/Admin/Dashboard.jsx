
import { Box, Grid } from "@chakra-ui/react";
import {
  FaUsers,
  FaStore,
  FaLeaf,
  FaShoppingCart,
} from "react-icons/fa";

import DashboardHeader from "../../components/admin/DashboardHeader";
import DashboardCard from "../../components/admin/DashboardCard";
import RecentOrdersTable from "../../components/admin/RecentOrdersTable";
import StatsChart from "../../components/admin/StatsChart";
import PromotionCard from "../../components/admin/PromotionCard";

// New Components
import ApprovalQueue from "../../components/admin/ApprovalQueue";
import InventoryTable from "../../components/admin/InventoryTable";

export default function Dashboard() {
  const cards = [
    {
      title: "Total Users",
      value: 120,
      subtitle: "+12%",
      icon: FaUsers,
      color: "blue.500",
      bg: "blue.50",
    },
    {
      title: "Total Sellers",
      value: 24,
      subtitle: "+5",
      icon: FaStore,
      color: "orange.500",
      bg: "orange.50",
    },
    {
      title: "Total Plants",
      value: 240,
      subtitle: "+18",
      icon: FaLeaf,
      color: "green.500",
      bg: "green.50",
    },
    {
      title: "Total Orders",
      value: 80,
      subtitle: "+7",
      icon: FaShoppingCart,
      color: "purple.500",
      bg: "purple.50",
    },
  ];

  return (
    <Box p={8} bg="gray.50" minH="100vh">
      {/* Dashboard Header */}
      <DashboardHeader />

      {/* Dashboard Cards */}
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2,1fr)",
          lg: "repeat(4,1fr)",
        }}
        gap={6}
        mt={6}
      >
        {cards.map((card) => (
          <DashboardCard
            key={card.title}
            {...card}
          />
        ))}
      </Grid>
        {/* Approval Queue & Inventory */}
        <Grid
          mt={8}
          gap={6}
          templateColumns={{
            base: "1fr",
            lg: "340px 1fr",
          }}
        >
          <ApprovalQueue />
          <InventoryTable />
        </Grid>

      {/* Recent Orders */}
      <Box mt={8}>
        <RecentOrdersTable />
      </Box>

      {/* Stats & Promotion */}
      <Grid
        mt={8}
        gap={6}
        templateColumns={{
          base: "1fr",
          lg: "2fr 1fr",
        }}
      >
        <StatsChart />
        <PromotionCard />
      </Grid>

    </Box>
  );
}
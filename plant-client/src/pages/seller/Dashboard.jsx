
import {
  Heading,
  Text,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";

import {
  Sprout,
  ClipboardList,
  PackageX,
  Clock,
} from "lucide-react";

import DashboardCard from "../../components/seller/DashboardCard";
import SalesChart from "../../components/seller/SalesChart";
import CategorySplit from "../../components/seller/CategorySplit";

export default function Dashboard() {
  return (
    <>
      {/* Page Heading */}
      <Heading color="#1B4332" >
        Dashboard
      </Heading>

      <Text color="gray.500" >
        Welcome back, Seller 👋
      </Text>

      {/* KPI Cards */}
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          xl: 4,
        }}
        spacing={6}
        mb={6}
      >
        <DashboardCard
          title="Revenue"
          value="$24,590"
          icon={Sprout}
          iconBg="green.50"
          iconColor="green.600"
          badge="+12%"
        />

        <DashboardCard
          title="Plants Sold"
          value="1,142"
          icon={ClipboardList}
          iconBg="orange.50"
          iconColor="orange.500"
          badge="-2%"
        />

        <DashboardCard
          title="Customers"
          value="482"
          icon={Clock}
          iconBg="blue.50"
          iconColor="blue.500"
          badge="+8%"
        />

        <DashboardCard
          title="Low Stock"
          value="9"
          icon={PackageX}
          iconBg="red.50"
          iconColor="red.500"
          badge="Stable"
        />
      </SimpleGrid>

      {/* Chart & Category */}
      <SimpleGrid
        columns={{
          base: 1,
          lg: 3,
        }}
        spacing={6}
        mt={2}
      >
        <Box gridColumn={{ lg: "span 2" }}>
          <SalesChart />
        </Box>

        <CategorySplit />
      </SimpleGrid>
    </>
  );
}
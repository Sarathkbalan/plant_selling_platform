import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import {
  FaUsers,
  FaLeaf,
  FaStore,
  FaShoppingCart,
} from "react-icons/fa";

import DashboardCard from "../../components/admin/DashboardCard";

export default function Dashboard() {
  const cards = [
    {
      title: "Total Users",
      value: 120,
      icon: FaUsers,
      color: "blue.500",
    },
    {
      title: "Total Sellers",
      value: 24,
      icon: FaStore,
      color: "orange.500",
    },
    {
      title: "Total Plants",
      value: 240,
      icon: FaLeaf,
      color: "green.500",
    },
    {
      title: "Total Orders",
      value: 80,
      icon: FaShoppingCart,
      color: "purple.500",
    },
  ];

  return (
    <Box p={6}>
      <Heading mb={8} color="gray.600">
        Admin Dashboard
      </Heading>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        spacing={6}
      >
        {cards.map((card) => (
          <DashboardCard
            key={card.title}
            title={card.title}
            value={card.value}
            icon={card.icon}
            color={card.color}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
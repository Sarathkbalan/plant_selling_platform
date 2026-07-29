
import { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  Flex,
} from "@chakra-ui/react";
import {
  Sprout,
  PackageX,
  ClipboardList,
  Clock,
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";
import { getMyListings } from "../../services/sellerPlantService";
import { getSellerOrders } from "../../services/sellerOrderService";

const LOW_STOCK_THRESHOLD = 5;

function StatCard({ icon, label, value, accent }) {
  return (
    <Box bg="white" borderRadius="xl" p={5} boxShadow="sm">
      <Flex align="center" gap={3} mb={2}>
        <Flex
          w="36px"
          h="36px"
          align="center"
          justify="center"
          borderRadius="full"
          bg={accent}
        >
          <Icon as={icon} boxSize={4} color="white" />
        </Flex>

        <Text
          fontSize="sm"
          color="#5B5B4F"
          fontWeight="medium"
        >
          {label}
        </Text>
      </Flex>

      <Text
        fontSize="2xl"
        fontWeight="bold"
        color="#1E1E16"
      >
        {value}
      </Text>
    </Box>
  );
}

export default function Dashboard() {
  const { user } = useAuth();

  const [plants, setPlants] = useState([]);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      getMyListings(),
      getSellerOrders(),
    ])
      .then(([plantData, orderData]) => {
        setPlants(plantData || []);
        setOrders(orderData || []);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const activeListings = plants.filter(
    (p) => p.isActive
  ).length;

  const lowStockCount = plants.filter(
    (p) => p.stock <= LOW_STOCK_THRESHOLD
  ).length;

  const pendingOrders = orders.filter((o) =>
    ["pending", "processing"].includes(
      o.status?.toLowerCase()
    )
  ).length;
console.log(user);
  return (
    <>
      <Heading size="lg" color="#1B4332">
        Dashboard
      </Heading>

      <Text color="#5B5B4F" mt={1}>
        Welcome back, {user?.name}
      </Text>

      {user?.role?.toLowerCase() === "seller" &&
        !user?.isApproved && (
          <Box
            mt={4}
            bg="#FFF4E5"
            border="1px solid"
            borderColor="#F0C089"
            borderRadius="md"
            p={4}
          >
            <Text
              fontSize="sm"
              color="#8A5A1E"
            >
              Your seller account is pending
              admin approval — listings won't
              be visible to customers until
              then.
            </Text>
            
          </Box>
        )}

      <SimpleGrid
        columns={{ base: 1, sm: 2, lg: 4 }}
        spacing={5}
        mt={8}
      >
        <StatCard
          icon={Sprout}
          label="Active Listings"
          value={isLoading ? "—" : activeListings}
          accent="#1B4332"
        />

        <StatCard
          icon={ClipboardList}
          label="Total Orders"
          value={isLoading ? "—" : orders.length}
          accent="#2F6FED"
        />

        <StatCard
          icon={Clock}
          label="Pending / Processing"
          value={isLoading ? "—" : pendingOrders}
          accent="#E08A3E"
        />

        <StatCard
          icon={PackageX}
          label="Low Stock (≤ 5)"
          value={isLoading ? "—" : lowStockCount}
          accent="#D64545"
        />
      </SimpleGrid>
    </>
  );
}
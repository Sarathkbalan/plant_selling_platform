import { useEffect, useMemo, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import CategoryFilter from "../../components/customer/CategoryFilter";
import SortDropdown from "../../components/customer/SortDropdown";
import PlantGrid from "../../components/customer/PlantGrid";
import Hero from "../../components/customer/Hero";

import {
  getPlants,
  filterAndSortPlants,
} from "../../services/plantService";

export default function Home() {
  const [plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState("All Plants");
  const [sortBy, setSortBy] = useState("popular");
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const loadPlants = async () => {
      try {
        const data = await getPlants();
        setPlants(data);
      } catch (error) {
        console.error("Failed to load plants:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPlants();
  }, []);

  // Generate categories dynamically from plants
  const categories = useMemo(() => {
    return [
      "All Plants",
      ...new Set(plants.map((plant) => plant.categoryName)),
    ];
  }, [plants]);

  const visiblePlants = useMemo(() => {
    return filterAndSortPlants(plants, category, sortBy);
  }, [plants, category, sortBy]);

  const handleAdd = () => {
    setCartCount((count) => count + 1);
  };

  return (
    <Box bg="#FAF9F4">
      <Hero />

      <Box as="main" maxW="7xl" mx="auto" px={6} mt={10}>
        <Flex
          direction={{ base: "column", sm: "row" }}
          align={{ sm: "center" }}
          justify={{ sm: "space-between" }}
          gap={4}
        >
        <CategoryFilter
      categories={categories}
      active={category}
      onSelect={setCategory}
    />

          <SortDropdown
            value={sortBy}
            onChange={setSortBy}
          />
        </Flex>

        <Box mt={2}>
          {isLoading ? (
            <Text textAlign="center" color="#8A8A78" py={16}>
              Loading plants...
            </Text>
          ) : (
            <PlantGrid
              plants={visiblePlants}
              onAdd={handleAdd}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
}
// import { SimpleGrid } from "@chakra-ui/react";
// import PlantCard from "./PlantCard";

// function PlantGrid({ plants }) {
//   return (
//     <SimpleGrid
//       columns={{ base: 1, md: 2, lg: 4 }}
//       spacing={6}
//       mt={6}
//     >
//       {plants.map((plant) => (
//         <PlantCard key={plant.id} plant={plant} />
//       ))}
//     </SimpleGrid>
//   );
// }

// export default PlantGrid;


import { useState } from "react";
import { SimpleGrid, Button, Flex, Text } from "@chakra-ui/react";
import PlantCard from "./PlantCard";

const PAGE_SIZE = 8;

export default function PlantGrid({ plants, onAdd, onToggleFavorite }) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const visiblePlants = plants.slice(0, visibleCount);
  const hasMore = visibleCount < plants.length;

  if (plants.length === 0) {
    return (
      <Text textAlign="center" color="#8A8A78" py={16}>
        No plants match this category yet.
      </Text>
    );
  }

  return (
    <>
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={6}>
        {visiblePlants.map((plant) => (
          <PlantCard
            key={plant.id}
            plant={plant}
            onAdd={onAdd}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </SimpleGrid>

      {hasMore && (
        <Flex justify="center" mt={10}>
          <Button
            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
            variant="outline"
            borderColor="#1B4332"
            color="#1B4332"
            fontWeight="medium"
            borderRadius="full"
            px={6}
            _hover={{ bg: "#1B4332", color: "white" }}
          >
            Load More Plants
          </Button>
        </Flex>
      )}
    </>
  );
}
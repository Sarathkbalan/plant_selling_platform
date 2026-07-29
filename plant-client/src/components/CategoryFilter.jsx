
import { Wrap, WrapItem, Button } from "@chakra-ui/react";
import { CATEGORIES } from "../services/plantService";

export default function CategoryFilter({ active, onSelect }) {
  return (
    <Wrap spacing={3}>
      {CATEGORIES.map((category) => {
        const isActive = category === active;
        return (
          <WrapItem key={category}>
            <Button
              onClick={() => onSelect?.(category)}
              size="sm"
              borderRadius="full"
              px={5}
              fontWeight="medium"
              bg={isActive ? "#1B4332" : "white"}
              color={isActive ? "white" : "#3A3A30"}
              border={isActive ? "none" : "1px solid"}
              borderColor="blackAlpha.200"
              _hover={{
                bg: isActive ? "#163829" : "white",
                borderColor: isActive ? "transparent" : "#1B433266",
              }}
            >
              {category}
            </Button>
          </WrapItem>
        );
      })}
    </Wrap>
  );
}
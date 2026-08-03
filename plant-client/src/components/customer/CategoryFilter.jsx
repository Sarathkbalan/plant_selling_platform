import { Wrap, WrapItem, Button } from "@chakra-ui/react";

export default function CategoryFilter({
  categories,
  active,
  onSelect,
}) {
  return (
    <Wrap spacing={3}>
      {categories.map((category) => {
        const isActive = category === active;

        return (
          <WrapItem key={category}>
            <Button
              onClick={() => onSelect(category)}
              size="sm"
              borderRadius="full"
              px={5}
              fontWeight="medium"
              bg={isActive ? "#1B4332" : "white"}
              color={isActive ? "white" : "#3A3A30"}
              border={isActive ? "none" : "1px solid"}
              borderColor="blackAlpha.200"
            >
              {category}
            </Button>
          </WrapItem>
        );
      })}
    </Wrap>
  );
}
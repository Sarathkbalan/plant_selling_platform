import { useState } from "react";
import {
  HStack,
  IconButton,
  Text,
  Box,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

export default function QuantitySelector({
  value = 1,
  min = 1,
  max = 20,
  onChange,
}) {
  const [quantity, setQuantity] = useState(value);

  const increase = () => {
    if (quantity >= max) return;

    const newValue = quantity + 1;
    setQuantity(newValue);

    if (onChange) {
      onChange(newValue);
    }
  };

  const decrease = () => {
    if (quantity <= min) return;

    const newValue = quantity - 1;
    setQuantity(newValue);

    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <HStack
      spacing={4}
      border="1px solid"
      borderColor="gray.200"
      borderRadius="xl"
      p={2}
      w="fit-content"
      bg="white"
      shadow="sm"
    >
      <IconButton
        icon={<MinusIcon />}
        aria-label="Decrease quantity"
        size="sm"
        variant="ghost"
        onClick={decrease}
      />

      <Box minW="40px" textAlign="center">
        <Text
          fontSize="lg"
          fontWeight="bold"
          color="gray.800"
        >
          {quantity}
        </Text>
      </Box>

      <IconButton
        icon={<AddIcon />}
        aria-label="Increase quantity"
        size="sm"
        variant="ghost"
        onClick={increase}
      />
    </HStack>
  );
}
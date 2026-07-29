import { HStack, Select, IconButton } from "@chakra-ui/react";
import { SlidersHorizontal } from "lucide-react";
import { SORT_OPTIONS } from "../services/plantService";

export default function SortDropdown({ value, onChange, onFilterClick }) {
  return (
    <HStack spacing={3}>
      <Select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        aria-label="Sort plants"
        bg="white"
        border="1px solid"
        borderColor="blackAlpha.200"
        borderRadius="full"
        fontSize="sm"
        color="#2B2B22"
        w="auto"
        _focusVisible={{ boxShadow: "0 0 0 2px #1B433255" }}
      >
        {SORT_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            Sort by: {opt.label}
          </option>
        ))}
      </Select>

      <IconButton
        aria-label="More filters"
        icon={<SlidersHorizontal size={16} />}
        onClick={onFilterClick}
        bg="white"
        border="1px solid"
        borderColor="blackAlpha.200"
        borderRadius="full"
        size="sm"
        color="#2B2B22"
        _hover={{ borderColor: "#1B433266" }}
      />
    </HStack>
  );
}
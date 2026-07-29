import { Input } from "@chakra-ui/react";

function SearchBar({
  value,
  onChange,
  placeholder = "Search..."
}) {
  return (
    <Input
      mb={5}
      bg="white"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default SearchBar;
import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";

import Select from "react-select";

const fieldStyles = {
  bg: "white",
  color: "black",
  border: "2px solid",
  borderColor: "green.400",

  _placeholder: {
    color: "gray.500",
  },

  _hover: {
    borderColor: "green.500",
  },

  _focus: {
    borderColor: "green.500",
    boxShadow: "0 0 0 1px var(--chakra-colors-green-500)",
  },
};

const categoryOptions = [
  { value: 1, label: "Flower" },
  { value: 2, label: "Indoor Plant" },
  { value: 3, label: "Outdoor Plant" },
  { value: 4, label: "Medicinal Plant" },
  { value: 5, label: "Succulent" },
];

function PlantForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    categoryId: "",
    image: null,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.name === "price" ||
        e.target.name === "stock" ||
        e.target.name === "categoryId"
          ? Number(e.target.value)
          : e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setForm({
      ...form,
      image: e.target.files[0],
    });
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData();

  formData.append("name", form.name);
  formData.append("description", form.description);
  formData.append("price", form.price);
  formData.append("stock", form.stock);
  formData.append("categoryId", form.categoryId);

  if (form.image) {
    formData.append("image", form.image);
  }

  console.log("===== FormData =====");

  for (const [key, value] of formData.entries()) {
    console.log(key, value);
  }

  onSubmit(formData);
};

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      bg="white"
      p={6}
      borderRadius="lg"
      shadow="md"
      w="1200px"
    >
      <VStack spacing={5}>
        <FormControl isRequired>
          <FormLabel color="green.500">Plant Name</FormLabel>
          <Input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="plant name"
            {...fieldStyles}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel color="green.500">Description</FormLabel>
          <Textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Beautiful flower"
            {...fieldStyles}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel color="green.500">Price</FormLabel>
          <Input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="250"
            {...fieldStyles}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel color="green.500">Stock</FormLabel>
          <Input
            type="number"
            name="stock"
            value={form.stock}
            onChange={handleChange}
            placeholder="20"
            {...fieldStyles}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel color="green.500">Plant Image</FormLabel>

          <Input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            p={1}
            color="white"
          />

          {form.image && (
            <Box color="green.300" fontSize="sm">
              {form.image.name}
            </Box>
          )}
        </FormControl>

        <FormControl isRequired>
  <FormLabel color="green.500">Category</FormLabel>

  <Select
    options={categoryOptions}
    placeholder="Select Category"
    value={
      categoryOptions.find(
        (option) => option.value === form.categoryId
      ) || null
    }
    onChange={(selectedOption) =>
      setForm({
        ...form,
        categoryId: selectedOption.value,
      })
    }
    styles={{
      control: (provided, state) => ({
        ...provided,
        border: "2px solid #38A169",
        borderRadius: "8px",
        minHeight: "42px",
        boxShadow: state.isFocused
          ? "0 0 0 1px #38A169"
          : "none",
        "&:hover": {
          borderColor: "#2F855A",
        },
      }),

      menu: (provided) => ({
        ...provided,
        backgroundColor: "white",
      }),

      option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused
          ? "#C6F6D5"
          : state.isSelected
          ? "#38A169"
          : "white",
        color: state.isSelected ? "white" : "black",
        cursor: "pointer",
      }),
    }}
  />
</FormControl>

        <Button
          type="submit"
          colorScheme="green"
          width="full"
        >
          Save Plant
        </Button>
      </VStack>
    </Box>
  );
}
export default PlantForm;
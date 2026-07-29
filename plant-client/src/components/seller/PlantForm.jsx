import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  VStack,
} from "@chakra-ui/react";

const fieldStyles = {
  color: "white",
  borderColor: "whiteAlpha.400",
  _placeholder: { color: "whiteAlpha.600" },
  _hover: { borderColor: "green.400" },
  _focus: {
    borderColor: "green.400",
    boxShadow: "0 0 0 1px var(--chakra-colors-green-400)",
  },
};

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
      bg="blackAlpha.800"
      p={6}
      borderRadius="lg"
      shadow="md"
      w="1200px"
    >
      <VStack spacing={5}>
        <FormControl isRequired>
          <FormLabel color="green.200">Plant Name</FormLabel>
          <Input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Rose"
            {...fieldStyles}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel color="green.200">Description</FormLabel>
          <Textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Beautiful flower"
            {...fieldStyles}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel color="green.200">Price</FormLabel>
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
          <FormLabel color="green.200">Stock</FormLabel>
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
          <FormLabel color="green.200">Plant Image</FormLabel>

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
          <FormLabel color="green.200">Category</FormLabel>

          <Select
            name="categoryId"
            value={form.categoryId}
            onChange={handleChange}
            placeholder="Select Category"
            {...fieldStyles}
            sx={{
              "> option": {
                color: "black",
              },
            }}
          >
            <option value={1}>Flower</option>
            <option value={2}>Indoor Plant</option>
            <option value={3}>Outdoor Plant</option>
            <option value={4}>Medicinal Plant</option>
            <option value={5}>Succulent</option>
          </Select>
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
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Select,
} from "@chakra-ui/react";

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

export default function PlantForm({
  onSubmit,
  initialData = null,
}) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    categoryName: "",
    image: null,
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name || "",
        description: initialData.description || "",
        price: initialData.price || "",
        stock: initialData.stock || "",
        categoryName: initialData.categoryName || "",
        image: null,
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        name === "price" || name === "stock"
          ? Number(value)
          : value,
    }));
  };

  const handleImageChange = (e) => {
    setForm((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", form.name);
    formData.append("description", form.description);
    formData.append("price", form.price);
    formData.append("stock", form.stock);
    formData.append("categoryName", form.categoryName);

    if (form.image) {
      formData.append("image", form.image);
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
      w={{base: "100%", md: "600px",lg: "1200px"}}
    >
      <VStack spacing={5} >
        <FormControl isRequired>
          <FormLabel color="green.500">
            Plant Name
          </FormLabel>

          <Input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Plant Name"
            {...fieldStyles}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel color="green.500">
            Description
          </FormLabel>

          <Textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            {...fieldStyles}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel color="green.500">
            Price
          </FormLabel>

          <Input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            {...fieldStyles}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel color="green.500">
            Stock
          </FormLabel>

          <Input
            type="number"
            name="stock"
            value={form.stock}
            onChange={handleChange}
            {...fieldStyles}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel color="green.500">
            Category
          </FormLabel>

          <Select
            name="categoryName"
            value={form.categoryName}
            onChange={handleChange}
            {...fieldStyles}
          >
            <option value="">Select Category</option>
            <option value="Flower">Flower</option>
            <option value="Indoor Plant">
              Indoor Plant
            </option>
            <option value="Outdoor Plant">
              Outdoor Plant
            </option>
            <option value="Medicinal Plant">
              Medicinal Plant
            </option>
            <option value="Succulent">
              Succulent
            </option>
            <option value="Fruit Plant">
              Fruit Plant
            </option>
            <option value="Herbal Plant">
              Herbal Plant
            </option>
            <option value="Bonsai">
              Bonsai
            </option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel color="green.500">
            Plant Image
          </FormLabel>

          <Input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            p={1}
          />

          {form.image && (
            <Box
              color="green.500"
              fontSize="sm"
              mt={2}
            >
              {form.image.name}
            </Box>
          )}

          {!form.image &&
            initialData?.imageUrl && (
              <Box mt={3}>
                <img
                  src={`http://localhost:5078${initialData.imageUrl}`}
                  alt={initialData.name}
                  width="150"
                  style={{
                    borderRadius: "8px",
                  }}
                />
              </Box>
            )}
        </FormControl>

        <Button
          type="submit"
          colorScheme="green"
          width="full"
        >
          {initialData
            ? "Update Plant"
            : "Save Plant"}
        </Button>
      </VStack>
    </Box>
  );
}
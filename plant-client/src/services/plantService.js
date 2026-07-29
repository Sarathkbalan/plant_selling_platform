
import api from "./api";

export const getPlants = async () => {
  const response = await api.get("/plant");
  return response.data;
};

export const getPlantById = async (id) => {
  const response = await api.get(`/plant/${id}`);
  return response.data;
};

export const CATEGORIES = [
  "All Plants",
  "Indoor",
  "Outdoor",
  "Succulents",
  "Flowering",
];

export const SORT_OPTIONS = [
  { value: "popular", label: "Popular" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
];

export function filterAndSortPlants(plants, category, sortBy) {
  let result = [...plants];

  if (category && category !== "All Plants") {
    result = result.filter(
      (plant) => plant.category?.name === category
    );
  }

  switch (sortBy) {
    case "price-asc":
      result.sort((a, b) => a.price - b.price);
      break;

    case "price-desc":
      result.sort((a, b) => b.price - a.price);
      break;

    default:
      break;
  }

  return result;
}

import api from "./api";

// =========================
// Sellers
// =========================
export const getSellers = async () => {
  const response = await api.get("/admin/sellers");
  return response.data;
};

// =========================
// Customers
// =========================
export const getCustomers = async () => {
  const response = await api.get("/admin/customers");
  return response.data;
};

// =========================
// Plants
// =========================

// Get all plants
export const getAllPlants = async () => {
  const response = await api.get("/plant");
  return response.data;
};

// Get plant by ID
export const getPlantById = async (id) => {
  const response = await api.get(`/plant/${id}`);
  return response.data;
};

// Delete plant
export const deletePlant = async (id) => {
  const response = await api.delete(`/plant/${id}`);
  return response.data;
};

// Add plant
export const addPlant = async (formData) => {
  const response = await api.post("/plant", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

// Update plant
export const updatePlant = async (id, formData) => {
  const response = await api.put(`/plant/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};
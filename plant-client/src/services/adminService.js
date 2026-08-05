import api from "./api";

// =========================
// Sellers
// =========================

// Get all sellers
export const getSellers = async () => {
  const { data } = await api.get("/admin/sellers");
  return data;
};

// Approve seller
export const approveSeller = async (id) => {
  const { data } = await api.put(`/admin/approve/${id}`);
  return data;
};

// Reject seller
export const rejectSeller = async (id) => {
  const { data } = await api.put(`/admin/reject/${id}`);
  return data;
};

// =========================
// Customers
// =========================

export const getCustomers = async () => {
  const { data } = await api.get("/admin/customers");
  return data;
};

// =========================
// Plants
// =========================

// Get all plants
export const getAllPlants = async () => {
  const { data } = await api.get("/plant");
  return data;
};

// Get plant by id
export const getPlantById = async (id) => {
  const { data } = await api.get(`/plant/${id}`);
  return data;
};

// Delete plant
export const deletePlant = async (id) => {
  const { data } = await api.delete(`/plant/${id}`);
  return data;
};

// Create plant
export const addPlant = async (formData) => {
  const { data } = await api.post("/plant", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

// Update plant
export const updatePlant = async (id, formData) => {
  const { data } = await api.put(`/plant/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

// Delete Seller
export const deleteSeller = async (id) => {
  const response = await api.delete(`/admin/seller/${id}`);
  return response.data;
};
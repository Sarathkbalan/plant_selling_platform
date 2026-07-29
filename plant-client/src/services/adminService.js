import api from "./api";

// Get all sellers
export const getSellers = async () => {
  const response = await api.get("/admin/sellers");
  return response.data;
};

// Get all customers
export const getCustomers = async () => {
  const response = await api.get("/admin/customers");
  return response.data;
};
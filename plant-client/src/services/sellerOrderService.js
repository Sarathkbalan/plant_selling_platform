import api from "./api";

export const getSellerOrders = async () => {
  const response = await api.get("/orders/seller");
  return response.data;
};

export const getOrderById = async (id) => {
  const response = await api.get(`/orders/${id}`);
  return response.data;
};

export const updateOrderStatus = async (id, status) => {
  const response = await api.put(`/orders/${id}/status`, {
    status,
  });

  return response.data;
};
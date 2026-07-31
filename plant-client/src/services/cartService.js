// src/services/cartService.js

import api from "./api";

export const addToCart = (plantId, quantity = 1) =>
  api.post("/cart/add", {
    plantId,
    quantity,
  });

export const getCart = () => api.get("/cart");

export const updateCart = (id, quantity) =>
  api.put(`/cart/${id}`, {
    quantity,
  });

export const removeCartItem = (id) =>
  api.delete(`/cart/${id}`);

export const clearCart = () =>
  api.delete("/cart/clear");
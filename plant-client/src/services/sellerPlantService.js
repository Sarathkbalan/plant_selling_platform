import api from "./api";

export const getMyListings = async () => {
  const response = await api.get("/plant");
  return response.data;
};

export const getMyListingById = async (id) => {
  const response = await api.get(`/plant/${id}`);
  return response.data;
};

export const createPlant = async (formData) => {
  const response = await api.post("/plant", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const updatePlant = async (id, formData) => {
  const response = await api.put(`/plant/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const deletePlant = async (id) => {
  const response = await api.delete(`/plant/${id}`);
  return response.data;
};
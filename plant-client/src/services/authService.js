import api from "./api";

// Login
export const login = async (data) => {
  const response = await api.post("/Auth/login", data);
  return response.data;
};

// Register
export const register = async (data) => {
  const response = await api.post("/Auth/register", data);
  return response.data;
};

// Update Profile
export const updateProfile = async (data) => {
  const response = await api.put("/Auth/profile", data);
  return response.data;
};
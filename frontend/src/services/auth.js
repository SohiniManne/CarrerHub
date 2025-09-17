import api from "./api";

// Register new user
export const registerUser = async (formData) => {
  const res = await api.post("/auth/register", formData);
  return res.data;
};

// Login user
export const loginUser = async (credentials) => {
  const res = await api.post("/auth/login", credentials);
  return res.data;
};

// Logout (just clear localStorage on client)
export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

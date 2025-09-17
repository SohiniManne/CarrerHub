import React, { useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";
import { registerUser } from "../services/auth";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student", // default role
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Trim inputs and validate required fields
      const payload = {
        name: (form.name || "").trim(),
        email: (form.email || "").trim(),
        password: form.password || "",
        role: (form.role || "").trim(),
      };

      const missing = [];
      if (!payload.name) missing.push("Name");
      if (!payload.email) missing.push("Email");
      if (!payload.password) missing.push("Password");
      if (!payload.role) missing.push("Role");
      if (missing.length) {
        setError(`${missing.join(", ")} required`);
        return;
      }

      await registerUser(payload);
      alert("Registration successful! Please login.");
      setError("");
    } catch (err) {
      const apiMessage = err?.response?.data?.message || "Registration failed. Try again.";
      setError(apiMessage);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          fullWidth
          margin="normal"
          value={form.name}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          margin="normal"
          value={form.email}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          fullWidth
          margin="normal"
          value={form.password}
          onChange={handleChange}
        />
        <TextField
          label="Role (student/employee/admin)"
          name="role"
          fullWidth
          margin="normal"
          value={form.role}
          onChange={handleChange}
        />
        {error && (
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Register
        </Button>
      </form>
    </Container>
  );
};

export default Register;

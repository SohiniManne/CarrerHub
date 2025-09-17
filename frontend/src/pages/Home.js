import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container sx={{ mt: 10, textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>
        Welcome to CareerHub 🚀
      </Typography>
      <Button component={Link} to="/login" variant="contained" color="primary" sx={{ m: 1 }}>
        Login
      </Button>
      <Button component={Link} to="/register" variant="outlined" color="secondary" sx={{ m: 1 }}>
        Register
      </Button>
    </Container>
  );
};

export default Home;

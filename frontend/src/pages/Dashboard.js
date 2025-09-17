import React, { useContext } from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4">Welcome, {user?.name} ({user?.role})</Typography>
      <Button component={Link} to="/internships" variant="contained" sx={{ mt: 2 }}>View Internships</Button>
      <Button component={Link} to="/referrals" variant="outlined" sx={{ mt: 2, ml: 2 }}>View Referrals</Button>
    </Container>
  );
};

export default Dashboard;

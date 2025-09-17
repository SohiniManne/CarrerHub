import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import api from "../services/api";
import InternshipCard from "../components/InternshipCard";

const Internships = () => {
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    api.get("/internships").then((res) => setInternships(res.data));
  }, []);

  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={2}>
        {internships.map((internship) => (
          <Grid item xs={12} sm={6} md={4} key={internship.id}>
            <InternshipCard internship={internship} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Internships;

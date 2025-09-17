import React from "react";
import { Container, Typography } from "@mui/material";

const Unauthorized = () => {
  return (
    <Container sx={{ mt: 10, textAlign: "center" }}>
      <Typography variant="h3" color="error">
        403 - Unauthorized
      </Typography>
      <Typography variant="body1">
        You do not have permission to access this page.
      </Typography>
    </Container>
  );
};

export default Unauthorized;

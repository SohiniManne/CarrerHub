import React, { useContext } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import api from "../services/api";
import { AuthContext } from "../context/AuthContext";

const InternshipCard = ({ internship }) => {
  const { user } = useContext(AuthContext);

  const handleApply = async () => {
    if (!user) {
      alert("Please login to apply.");
      return;
    }

    try {
      await api.post("/referrals", {
        internship_id: internship.id,
        student_id: user.id,
        referrer_id: 2 // ⚡ temp: hardcoded, later you can make employee choose
      });
      alert("Application submitted successfully!");
    } catch (err) {
      console.error(err);
      alert("Error applying for internship");
    }
  };

  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">{internship.title}</Typography>
        <Typography variant="body2">{internship.company}</Typography>
        <Typography variant="body2">{internship.domain}</Typography>
        <Typography variant="body2">{internship.location}</Typography>
        <Typography variant="body2">{internship.description}</Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleApply}
        >
          Apply
        </Button>
      </CardContent>
    </Card>
  );
};

export default InternshipCard;

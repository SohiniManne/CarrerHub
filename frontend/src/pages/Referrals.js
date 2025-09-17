import React, { useEffect, useState, useContext } from "react";
import { Container, Typography } from "@mui/material";
import api from "../services/api";
import { AuthContext } from "../context/AuthContext";
import ReferralCard from "../components/ReferralCard"; // ✅ import at top

const Referrals = () => {
  const [referrals, setReferrals] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      api.get(`/referrals/${user.id}`).then((res) => setReferrals(res.data));
    }
  }, [user]);

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        My Referrals
      </Typography>
      {referrals.map((ref) => (
        <ReferralCard key={ref.id} referral={ref} />
      ))}
    </Container>
  );
};

export default Referrals;

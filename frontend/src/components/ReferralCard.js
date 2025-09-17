import React from "react";
import { Card, CardContent, Typography, Chip } from "@mui/material";

const ReferralCard = ({ referral }) => {
  // Set color for status
  const getStatusColor = (status) => {
    switch (status) {
      case "accepted":
        return "success";
      case "rejected":
        return "error";
      default:
        return "warning"; // pending
    }
  };

  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">
          Internship ID: {referral.internship_id}
        </Typography>
        <Typography variant="body2">
          Referred by Employee ID: {referral.referrer_id}
        </Typography>
        <Chip
          label={referral.status}
          color={getStatusColor(referral.status)}
          sx={{ mt: 1 }}
        />
      </CardContent>
    </Card>
  );
};

export default ReferralCard;

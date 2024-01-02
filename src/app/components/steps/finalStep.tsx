"use client";

import { useContext } from "react";
import { StepperFormDataContext } from "../../context";
import { SalaryRange } from "../../store";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { stepStyle } from "../styles";
import FinalStepButtonComponent from "../buttons/finalStepButtons";

export default function FinalStepComponent() {
  const { email, fullName, phoneNumber, salaryRange } = useContext(
    StepperFormDataContext
  );

  return (
    <Box sx={stepStyle}>
      <h2 style={{ fontWeight: 600 }}>Please check the data you entered</h2>
      <TextField
        data-testid={`final-step-fullName`}
        disabled
        label="Full Name"
        variant="standard"
        value={fullName}
      />
      <TextField
        data-testid={`final-step-email`}
        disabled
        label="Email"
        variant="standard"
        value={email}
      />
      <TextField
        data-testid={`final-step-phoneNumber`}
        disabled
        label="Phone Number"
        variant="standard"
        value={phoneNumber}
      />
      <TextField
        data-testid={`final-step-salaryRange`}
        disabled
        label="Salary Range"
        variant="standard"
        value={SalaryRange[salaryRange]}
      />
      <FinalStepButtonComponent />
    </Box>
  );
}

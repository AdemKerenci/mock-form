"use client";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { steps } from "../constants";

export default function StepperComponent() {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const islgUp = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box
      sx={{
        paddingTop: "4rem",
        paddingX: islgUp ? "8rem" : isSmUp ? "4rem" : "0.25rem",
      }}
    >
      <Stepper activeStep={0}>
        {steps.map((step) => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

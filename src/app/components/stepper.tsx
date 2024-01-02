"use client";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import React, { useReducer } from "react";
import InquiryStep1Component from "./steps/step1";
import { steps } from "../constants";
import FinalStepComponent from "./steps/finalStep";
import InquiryStep2Component from "./steps/step2";
import InquiryStep3Component from "./steps/step3";
import {
  StepperFormDataContext,
  StepperFormDataDispatchContext,
} from "../context";
import { stepperReducer } from "../reducer";
import InquiryStep4Component from "./steps/step4";
import { initialState } from "../store";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const getStepComponent = (step: number) => {
  switch (step) {
    case 1: {
      return InquiryStep2Component;
    }
    case 2: {
      return InquiryStep3Component;
    }
    case 3: {
      return InquiryStep4Component;
    }
    case 4: {
      return FinalStepComponent;
    }
    default: {
      return InquiryStep1Component;
    }
  }
};

export default function StepperComponent() {
  const [data, dispatch] = useReducer(stepperReducer, initialState);
  const { activeStep } = data;
  const StepComponent = getStepComponent(activeStep);
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const islgUp = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <StepperFormDataContext.Provider value={data}>
      <StepperFormDataDispatchContext.Provider value={dispatch}>
        <Box
          sx={{
            paddingTop: "4rem",
            paddingX: islgUp ? "8rem" : isSmUp ? "4rem" : "0.25rem",
          }}
        >
          <Stepper activeStep={activeStep}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{isSmUp ? step : null}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <StepComponent />
        </Box>
      </StepperFormDataDispatchContext.Provider>
    </StepperFormDataContext.Provider>
  );
}

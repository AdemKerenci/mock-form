import { BACK_BUTTON_ACTION, steps } from "../../constants";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useContext } from "react";
import {
  StepperFormDataContext,
  StepperFormDataDispatchContext,
} from "../../context";
import { buttonGroupStyle } from "../styles";

export default function ControlButtonsComponent() {
  const dispatch = useContext(StepperFormDataDispatchContext);
  const { activeStep } = useContext(StepperFormDataContext);

  const handleBack = () => {
    dispatch({ type: BACK_BUTTON_ACTION });
  };

  return (
    <Box sx={buttonGroupStyle}>
      <Button
        data-testid={`back-button`}
        color="inherit"
        onClick={handleBack}
        disabled={activeStep === 0}
        sx={{ mr: 1 }}
      >
        Back
      </Button>
      <Box sx={{ flex: "1 1 auto" }} />
      <Button data-testid={`submit-button`} type="submit">
        {activeStep === steps.length - 1 ? "Finish" : "Next"}
      </Button>
    </Box>
  );
}

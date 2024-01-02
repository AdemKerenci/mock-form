import { BACK_BUTTON_ACTION, RESET_DATA_ACTION, steps } from "../../constants";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { StepperFormDataDispatchContext } from "../../context";
import { buttonGroupStyle } from "../styles";

export default function FinalStepButtonComponent() {
  const dispatch = useContext(StepperFormDataDispatchContext);

  const handleReset = () => {
    dispatch({ type: RESET_DATA_ACTION });
  };

  const handleBack = () => {
    dispatch({ type: BACK_BUTTON_ACTION });
  };

  return (
    <Box sx={buttonGroupStyle}>
      <Button
        data-testid={`back-button`}
        color="inherit"
        onClick={handleBack}
        sx={{ mr: 1 }}
      >
        Back
      </Button>
      <Box sx={{ flex: "1 1 auto" }} />
      <Button data-testid={`reset-button`} onClick={handleReset}>
        Reset
      </Button>
    </Box>
  );
}

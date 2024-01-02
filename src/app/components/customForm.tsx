import { FormEventHandler } from "react";
import Box from "@mui/material/Box";
import { stepStyle } from "./styles";
import ControlButtonsComponent from "./buttons/controlButtons";

type CustomFormComponentProps = {
  children: React.ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

export default function CustomFormComponent({
  children,
  onSubmit,
}: CustomFormComponentProps) {
  return (
    <Box
      sx={stepStyle}
      component="form"
      onSubmit={onSubmit}
    >
      {children}
      <ControlButtonsComponent />
    </Box>
  );
}

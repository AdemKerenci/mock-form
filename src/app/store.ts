import { SalaryRangeKeysType, StateDataType } from "./types";

export const SalaryRange: { [key in SalaryRangeKeysType]: string } = {
  "0": "0-1000",
  "1": "1000-2000",
  "2": "2000-3000",
  "3": "3000-4000",
  "4": "Mehr als 4000",
};

export const initialState: StateDataType = {
  activeStep: 0,
  fullName: "",
  email: "",
  phoneNumber: "",
  salaryRange: "0",
};

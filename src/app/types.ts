import * as yup from "yup";
import { BACK_BUTTON_ACTION, RESET_DATA_ACTION, SUBMIT_DATA_ACTION } from "./constants";

export const step1FormSchema = yup.object({
  fullName: yup.string().required(),
});

export const step2FormSchema = yup.object({
  email: yup.string().email().required(),
});

export const step3FormSchema = yup.object({
  phoneNumber: yup.string().required(),
});

export const SalaryRangeKeys = ["0", "1", "2", "3", "4"] as const;
export type SalaryRangeKeysType = (typeof SalaryRangeKeys)[number];

export const step4FormSchema = yup.object({
  salaryRange: yup
    .mixed<SalaryRangeKeysType>()
    .oneOf(SalaryRangeKeys)
    .required(),
});

export type IStep1FormInput = yup.InferType<typeof step1FormSchema>;
export type IStep2FormInput = yup.InferType<typeof step2FormSchema>;
export type IStep3FormInput = yup.InferType<typeof step3FormSchema>;
export type IStep4FormInput = yup.InferType<typeof step4FormSchema>;

export type submitActionType = {
  type: typeof SUBMIT_DATA_ACTION;
  data: IStep1FormInput | IStep2FormInput | IStep3FormInput | IStep4FormInput;
};
export type resetActionType = { type: typeof RESET_DATA_ACTION };
export type backActionType = { type: typeof BACK_BUTTON_ACTION };
export type actionTypes = submitActionType | resetActionType | backActionType;

export type StateDataType = { activeStep: number } & IStep1FormInput &
  IStep2FormInput &
  IStep3FormInput &
  IStep4FormInput;

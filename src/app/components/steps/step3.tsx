"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "@mui/material/TextField";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useContext } from "react";
import {
  StepperFormDataContext,
  StepperFormDataDispatchContext,
} from "../../context";
import { SUBMIT_DATA_ACTION } from "../../constants";
import CustomFormComponent from "../customForm";
import { IStep3FormInput, step3FormSchema } from "../../types";

export default function InquiryStep3Component() {
  const dispatch = useContext(StepperFormDataDispatchContext);
  const { phoneNumber } = useContext(StepperFormDataContext);

  const {
    handleSubmit,
    control,
    formState: {
      errors: { phoneNumber: error },
    },
  } = useForm({
    resolver: yupResolver(step3FormSchema),
    defaultValues: {
      phoneNumber,
    },
  });

  const onSubmit: SubmitHandler<IStep3FormInput> = (data) => {
    dispatch({ type: SUBMIT_DATA_ACTION, data });
  };

  return (
    <CustomFormComponent onSubmit={handleSubmit(onSubmit)}>
      <h2 style={{ fontWeight: 600 }}>Please provide your phone number</h2>
      <Controller
        name="phoneNumber"
        control={control}
        render={({ field }) => (
          <TextField
            data-testid={`step-3-phoneNumber`}
            error={!!error}
            helperText={error?.message}
            label="Phone Number"
            variant="standard"
            {...field}
          />
        )}
      />
    </CustomFormComponent>
  );
}

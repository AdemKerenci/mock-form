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
import { IStep2FormInput, step2FormSchema } from "../../types";

export default function InquiryStep2Component() {
  const dispatch = useContext(StepperFormDataDispatchContext);
  const { email } = useContext(StepperFormDataContext);

  const {
    handleSubmit,
    control,
    formState: {
      errors: { email: error },
    },
  } = useForm({
    resolver: yupResolver(step2FormSchema),
    defaultValues: {
      email,
    },
  });

  const onSubmit: SubmitHandler<IStep2FormInput> = (data) => {
    dispatch({ type: SUBMIT_DATA_ACTION, data });
  };

  return (
    <CustomFormComponent onSubmit={handleSubmit(onSubmit)}>
      <h2 style={{ fontWeight: 600 }}>Please provide your email</h2>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            data-testid={`step-2-email`}
            error={!!error}
            helperText={error?.message}
            label="Email"
            variant="standard"
            {...field}
          />
        )}
      />
    </CustomFormComponent>
  );
}

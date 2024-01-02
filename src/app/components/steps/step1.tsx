"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "@mui/material/TextField";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IStep1FormInput, step1FormSchema } from "../../types";
import { useContext } from "react";
import {
  StepperFormDataContext,
  StepperFormDataDispatchContext,
} from "../../context";
import { SUBMIT_DATA_ACTION } from "../../constants";
import CustomFormComponent from "../customForm";

export default function InquiryStep1Component() {
  const dispatch = useContext(StepperFormDataDispatchContext);
  const { fullName } = useContext(StepperFormDataContext);

  const {
    handleSubmit,
    control,
    formState: {
      errors: { fullName: error },
    },
  } = useForm({
    resolver: yupResolver(step1FormSchema),
    defaultValues: {
      fullName,
    },
  });

  const onSubmit: SubmitHandler<IStep1FormInput> = (data) => {
    dispatch({ type: SUBMIT_DATA_ACTION, data });
  };

  return (
    <CustomFormComponent onSubmit={handleSubmit(onSubmit)}>
      <h2 style={{ fontWeight: 600 }}>Please provide your name</h2>
      <Controller
        name="fullName"
        control={control}
        render={({ field }) => (
          <TextField
            data-testid={`step-1-fullName`}
            error={!!error}
            helperText={error?.message?.replaceAll("fullName", "fullname")}
            label="FullName"
            variant="standard"
            {...field}
          />
        )}
      />
    </CustomFormComponent>
  );
}

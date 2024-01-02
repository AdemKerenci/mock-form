"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useContext } from "react";
import {
  StepperFormDataContext,
  StepperFormDataDispatchContext,
} from "../../context";
import { SUBMIT_DATA_ACTION } from "../../constants";
import CustomFormComponent from "../customForm";
import { IStep4FormInput, step4FormSchema } from "../../types";
import { SalaryRange } from "../../store";

export default function InquiryStep4Component() {
  const dispatch = useContext(StepperFormDataDispatchContext);
  const { salaryRange } = useContext(StepperFormDataContext);

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(step4FormSchema),
    defaultValues: {
      salaryRange,
    },
  });

  const onSubmit: SubmitHandler<IStep4FormInput> = (data) => {
    dispatch({ type: SUBMIT_DATA_ACTION, data });
  };

  return (
    <CustomFormComponent onSubmit={handleSubmit(onSubmit)}>
      <h2 style={{ fontWeight: 600 }}>Please select your salary range</h2>
      <Controller
        name="salaryRange"
        control={control}
        render={({ field }) => (
          <RadioGroup {...field}>
            {Object.entries(SalaryRange).map(([key, value]) => (
              <FormControlLabel
                key={key}
                value={key}
                control={<Radio data-testid={`step-4-salaryRange-${value}`} />}
                label={value}
              />
            ))}
          </RadioGroup>
        )}
      />
    </CustomFormComponent>
  );
}

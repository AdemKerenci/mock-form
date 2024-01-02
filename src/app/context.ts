import { Dispatch, createContext } from "react";
import { StateDataType, actionTypes } from "./types";

export const StepperFormDataContext = createContext<StateDataType>(
  {} as StateDataType
);
export const StepperFormDataDispatchContext = createContext<
  Dispatch<actionTypes>
>({} as Dispatch<actionTypes>);

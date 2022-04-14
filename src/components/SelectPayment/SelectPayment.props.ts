import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { Control, FieldError } from "react-hook-form";
import { IReviewForm } from "../Form/Form.interface";

export interface SelectProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  name: string;
  error?: FieldError;
  control: Control<IReviewForm>;
}

export enum SelectEnum {
  Cash = "Cash",
  Checks = "Checks",
  CreditCards = "CreditCards",
}

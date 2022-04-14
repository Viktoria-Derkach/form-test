import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IReviewForm } from "./Form.interface";

export interface FormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isOpened: boolean;
  setIsOpened: (isOpened: boolean) => void;
  defaultValues?: IReviewForm;
}

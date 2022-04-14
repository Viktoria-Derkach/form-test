import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface LabelProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  size?: "s" | "m";
  children: ReactNode;
}

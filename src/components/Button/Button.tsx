import cn from "classnames";
import React from "react";
import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";

export const Button = ({
  appearance,
  children,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: appearance === "primary",
        [styles.white]: appearance === "white",
      })}
      {...props}
    >
      {children}
    </button>
  );
};

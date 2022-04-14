import cn from "classnames";
import React from "react";
import styles from "./Label.module.css";
import { LabelProps } from "./Label.props";

export const Label = ({
  size = "s",
  children,

  ...props
}: LabelProps): JSX.Element => {
  return (
    <label
      className={cn(styles.label, {
        [styles.s]: size === "s",
        [styles.m]: size === "m",
      })}
      {...props}
    >
      {children}
    </label>
  );
};

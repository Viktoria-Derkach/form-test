import React from "react";
import styles from "./Devider.module.css";
import { DeviderhProps } from "./Devider.props";

export const Devider = ({
  className,
  ...props
}: DeviderhProps): JSX.Element => {
  return <hr className={styles.hr} {...props} />;
};

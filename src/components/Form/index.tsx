import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Button, Devider, Input, Label, SelectPayment, Textarea } from "..";
import { ReactComponent as CloseIcon } from "./close.svg";
import { IReviewForm } from "./Form.interface";
import styles from "./Form.module.css";
import { FormProps } from "./Form.props";

const einReg = /^[1-9]\d?-\d{7}$|^\s*$/;

const FormSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Must be bigger than one letter")
    .max(20, "Must be shorter")
    .required("Enter a name"),
  EIN: yup.string().matches(einReg, "EIN is not valid"),
  notes: yup.string().max(200, "Must be shorter"),
});

export const Form = ({
  isOpened,
  setIsOpened,
  className,
  defaultValues,
  ...props
}: FormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm<IReviewForm>({
    defaultValues,
    resolver: yupResolver(FormSchema),
  });

  const onSubmit = (formData: IReviewForm) => {
    if (formData) {
      console.log(formData);
      setIsOpened(false);
      reset();
      clearErrors();
    }
  };

  const closeForm = () => {
    setIsOpened(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formWrapper}>
      <div className={styles.form} {...props}>
        <div className={styles.formTitle}>
          Create new customer
          <button
            aria-label="Close the form"
            className={styles.close}
            onClick={closeForm}
          >
            <CloseIcon />
          </button>
        </div>
        <div className={styles.formContent}>
          <Label>
            Customer name<span className={styles.asterisk}>*</span>
          </Label>
          <Input
            {...register("name")}
            placeholder="Enter cusomer name"
            error={errors.name}
            aria-invalid={errors.name ? true : false}
          />
          <Label>Customers EIN</Label>
          <Input
            {...register("EIN")}
            placeholder="Enter cusomer EIN"
            error={errors.EIN}
            aria-invalid={errors.EIN ? true : false}
          />
          <Label>Notes</Label>
          <Textarea
            {...register("notes")}
            placeholder="Notes visible only to you and your team"
            error={errors.notes}
            aria-label="Notes"
            aria-invalid={errors.notes ? true : false}
          />
          <Label size="m">Payment and billing:</Label>
          <Label>Primary payment method</Label>
          <SelectPayment
            {...register("paymentMethod")}
            aria-label="Payment Method"
            control={control}
          />
        </div>

        <Devider />
        <div className={styles.submit}>
          <Button appearance="white" onClick={closeForm}>
            Cancel
          </Button>
          <Button type="submit" appearance="primary">
            Create
          </Button>
        </div>
      </div>
    </form>
  );
};

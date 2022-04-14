import React, { ForwardedRef, forwardRef } from "react";
import { Controller } from "react-hook-form";
import Select, { components } from "react-select";
import { ReactComponent as ArrowIcon } from "./arrow.svg";
import { SelectEnum, SelectProps } from "./SelectPayment.props";
import * as styles from "./SelectPayment.style";

interface IOption {
  value: SelectEnum;
  label: string;
}

export const SelectPayment = forwardRef(
  (
    { control }: SelectProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    const options: IOption[] = [
      { value: SelectEnum.Cash, label: "Cash" },
      { value: SelectEnum.Checks, label: "Checks" },
      { value: SelectEnum.CreditCards, label: "Credit cards" },
    ];

    const DropdownIndicator = (props: any) => {
      return (
        <components.DropdownIndicator {...props}>
          <ArrowIcon />
        </components.DropdownIndicator>
      );
    };

    return (
      <div>
        <Controller
          control={control}
          render={({ field: { onChange, value, name, ref } }) => {
            const currentSelection = options.find((c) => c.value === value);

            const handleSelectChange = (selectedOption: IOption | null) => {
              onChange(selectedOption?.value);
            };

            return (
              <Select
                inputRef={ref}
                value={currentSelection}
                name={name}
                components={{ DropdownIndicator }}
                options={options}
                onChange={handleSelectChange}
                styles={{
                  indicatorSeparator: () => ({
                    display: "none",
                  }),
                  placeholder: (base) => ({
                    ...base,
                    ...styles.placeholder,
                  }),
                  container: (base) => ({
                    ...base,
                    ...styles.select,
                  }),
                  control: (base) => ({
                    ...base,
                    ...styles.control,
                  }),

                  option: (base, { isDisabled, isFocused, isSelected }) => {
                    return {
                      ...base,
                      ...styles.options,
                      backgroundColor: isDisabled
                        ? undefined
                        : isSelected
                        ? "var(--primary)"
                        : undefined,
                      color: isDisabled
                        ? "#ccc"
                        : isSelected
                        ? "var(--white)"
                        : "var(--black)",

                      cursor: isDisabled ? "not-allowed" : "default",
                    };
                  },
                }}
              />
            );
          }}
          name="paymentMethod"
          rules={{
            required: true,
          }}
        />
      </div>
    );
  }
);

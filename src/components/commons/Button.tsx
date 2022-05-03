/* eslint-disable no-undef */
import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import styles from "../../styles/Buttons.module.scss";

type BtnProps<T extends ElementType> = {
  renderAs?: T;
  isLoading?: boolean;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

const Button = <T extends ElementType = "button">({
  renderAs,
  isLoading,
  children,
  ...rest
}: BtnProps<T>): JSX.Element => {
  return (
    <button
      as={renderAs}
      isLoading={isLoading}
      {...rest}
      className={styles.button}
    >
      {children}
    </button>
  );
};

export default Button;

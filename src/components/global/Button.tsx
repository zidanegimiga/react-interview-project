/* eslint-disable no-undef */
import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import styles from "../../../styles/Buttons.module.scss";

type BtnProps<T extends ElementType> = {
  renderAs?: T;
  isloading?: boolean;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

const Button = <T extends ElementType = "button">({
  renderAs,
  isloading,
  children,
  ...rest
}: BtnProps<T>): JSX.Element => {
  return (
    <button
      as={renderAs}
      isloading={isloading}
      {...rest}
      className={styles.button}
    >
      {children}
    </button>
  );
};

export default Button;

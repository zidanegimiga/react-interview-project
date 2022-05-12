/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable no-undef */
import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import styles from "../../../styles/Buttons.module.scss";

type BtnProps<T extends ElementType> = {
  renderAs?: T;
  margin?:string;
  isloading?: boolean;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

const Button = <T extends ElementType = "button">({
  renderAs,
  margin,
  isloading,
  children,
  ...rest
}: BtnProps<T>): JSX.Element => {
  return (
    <button
      as={renderAs}
      margin={margin}
      isloading={isloading}
      {...rest}
      className={styles.button}
      style={{margin:`${margin}`}}
    >
      {children}
    </button>
  );
};

export default Button;

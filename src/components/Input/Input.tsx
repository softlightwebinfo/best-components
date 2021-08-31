import React from "react";
import { BEM } from "../../functions";
import { IInputProps } from "../../props";

export const Input = ({ type = "text", ...props }: IInputProps) => {
  const cs = new BEM("Input", {});
  cs.Append(props.className);
  return (
    <input
      className={ cs.toString() }
      style={ props.style }
      type={ type }
      onChange={ props.onChange }
      value={ props.value }
      placeholder={ props.placeholder }
      disabled={ props.disabled }
      readOnly={ props.readOnly }
    />
  );
};

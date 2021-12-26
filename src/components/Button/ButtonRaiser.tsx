import React from "react";
import { BEM } from "../../functions";
import { IButtonProps } from "../../props";
import { Button } from "./Button";

export const ButtonRaiser = (props: IButtonProps) => {
  const cx = new BEM("ButtonRaiser", {
    [props.theme ?? ""]: !!props.theme,
  });
  cx.Append(props.className);

  return (
    <Button
      { ...props }
      className={ cx.toString() }
      style={ props.style }
    />
  );
};

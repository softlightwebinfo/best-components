import React from "react";
import { BEM } from "../../functions";
import { IFabProps } from "../../props/IFabProps";
import { Button } from "../Button";

export const Fab = (props: IFabProps) => {
  const cx = new BEM("Fab", {});
  cx.Append(props.className);
  return (
    <Button
      { ...props }
      className={ cx.toString() }
      style={ props.style }
    />
  );
};

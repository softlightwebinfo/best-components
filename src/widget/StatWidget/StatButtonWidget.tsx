import React from "react";
import { BEM } from "../../functions";
import { IStatButtonProps } from "../../props/IStatButtonProps";
import { Widget } from "../Widget";

export const StatButton = (props: IStatButtonProps) => {
  const cx = new BEM("StatButton", {});
  cx.Append(props.className);

  return (
    <Widget className={ cx.toString() } style={ props.style }>

    </Widget>
  );
};

import React from "react";
import { BEM } from "../../functions";
import { ICloseProps } from "../../props/ICloseProps";

export const Close = (props: ICloseProps) => {
  const cx = new BEM("Close", {});
  cx.Append(props.className);
  return (
    <span onClick={ props.onClick } className={ cx.toString() } style={ props.style }>
      <i className={ "fa fa-times" }/>
    </span>
  );
};

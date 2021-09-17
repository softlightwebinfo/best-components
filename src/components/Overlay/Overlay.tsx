import React from "react";
import { BEM } from "../../functions";
import { IOverlayProps } from "../../props/IOverlayProps";

export const Overlay = (props: IOverlayProps) => {
  const cx = new BEM("Overlay", {});
  cx.Append(props.className);

  return (
    <div className={ cx.toString() } style={ props.style }>
      { props.children }
    </div>
  );
};

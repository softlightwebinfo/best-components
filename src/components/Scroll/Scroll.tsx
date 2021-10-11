import React, { forwardRef } from "react";
import { BEM } from "../../functions";
import { IScrollProps } from "../../props/IScrollProps";

export const Scroll = forwardRef((props: IScrollProps, ref: any) => {
  const cx = new BEM("Scroll", {});
  cx.Append(props.className);
  return (
    <div className={ cx.toString() } style={ props.style }>
      <div className={ cx.Children("content") } ref={ ref }>{ props.children }</div>
    </div>
  );
});

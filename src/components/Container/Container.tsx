import React from "react";
import { BEM } from "../../functions";
import { IContainerProps } from "../../props/IContainerProps";

export const Container = (props: IContainerProps) => {
  const cx = new BEM("Container", {});
  cx.Append(props.className);
  return (
    <div
      style={ props.style }
      className={ cx.toString() }
    >
      { props.children }
    </div>
  );
};

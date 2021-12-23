import React from "react";
import { BEM } from "../../functions";
import { IToolbarRightProps } from "../../props/IToolbarRightProps";

export const ToolbarRight = (props: IToolbarRightProps) => {
  const cx = new BEM("ToolbarRight", {});
  cx.Append(props.className);

  return (
    <div className={ cx.toString() } style={ props.style }>
      { props.children }
    </div>
  );
};

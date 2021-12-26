import React from "react";
import { BEM } from "../../functions";
import { IWidgetProps } from "../../props/IWidgetProps";

export const Widget = (props: IWidgetProps) => {
  const cx = new BEM("Widget", {});
  cx.Append(props.className);

  return (
    <div className={ cx.toString() } style={ props.style }>
      { props.children }
    </div>
  );
};

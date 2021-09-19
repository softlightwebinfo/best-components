import React from "react";
import { BEM } from "../../functions";
import { ITimePickerItemProps } from "../../props";

export const TimePickerItem = (props: ITimePickerItemProps) => {
  const cx = new BEM("TimePickerItem", {
    active: props.activeLabel == props.label,
  });
  cx.Append(props.className);

  return (
    <div
      className={ cx.toString() }
      style={ props.style }
      onClick={ props.onClick }
    >
      { props.label < 10 ? "0" + props.label : props.label }
    </div>
  );
};

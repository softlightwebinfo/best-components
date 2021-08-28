import React from "react";
import { BEM } from "../../functions";
import { IAvatarStackedProps } from "../../props/IAvatarStackedProps";

export const AvatarStacked = (props: IAvatarStackedProps) => {
  const cx = new BEM("AvatarStacked", {});
  cx.Append(props.className);

  return (
    <div className={ cx.toString() } style={ props.style }>
      { props.children }
    </div>
  );
};

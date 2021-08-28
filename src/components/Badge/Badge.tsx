import React from "react";
import { BEM } from "../../functions";
import { IBadgeProps } from "../../props/IBadgeProps";

export const Badge = (props: IBadgeProps) => {
  const cx = new BEM("Badge", {
    rounded: props.rounded,
    [props.type ?? '']: !!props.type,
  });
  cx.Append(props.className);
  return (
    <span className={ cx.toString() } style={ props.style }>
      { props.icon && (<span className={ cx.Children("icon") }>{ props.icon }</span>) }
      { props.label }
      { props.isCloseable && (
        <i className={ cx.Children("closeable", "fa fa-times") } onClick={ props.onClick }/>
      ) }
    </span>
  );
};

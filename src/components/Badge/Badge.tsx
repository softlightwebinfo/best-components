import React from "react";
import { BEM } from "../../functions";
import { IBadgeProps } from "../../props";

export const Badge = (props: IBadgeProps) => {
  const cx = new BEM("Badge", {
    rounded: props.rounded,
    [props.type ?? '']: !!props.type,
    transparent: props.transparent,
    radius: props.radius,
  });
  cx.Append(props.className);
  return (
    <span className={ cx.toString() } style={ {
      ...props.style,
      ...props.textColor ? { "--badge-color": props.textColor } : {},
      ...props.backgroundColor ? { "--badge-background-color": props.backgroundColor } : {},
    } }>
      { props.icon && (<span className={ cx.Children("icon") }>{ props.icon }</span>) }
      { props.label }
      { props.isCloseable && (
        <i className={ cx.Children("closeable", "fa fa-times") } onClick={ props.onClick }/>
      ) }
    </span>
  );
};

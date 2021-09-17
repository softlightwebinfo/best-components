import React from "react";
import { BEM } from "../../functions";
import { IButtonProps } from "../../props";

export const Button = ({ type = "button", ...props }: IButtonProps) => {
  const cx = new BEM("Button", {
    dashed: props.dashed,
    round: props.round,
    default: props.default,
    primary: props.primary,
    block: props.block,
    dark: props.dark,
    [props.size ?? '']: !!props.size,
    iconChildren: !!(props.icon && !props.children),
  });
  cx.Append(props.className);
  return (
    <button
      type={ type }
      style={ props.style }
      onClick={ props.onClick }
      disabled={ props.disabled }
      className={ cx.toString() }
    >
      { props.icon && (<span className={ cx.Children("icon") }>{ props.icon }</span>) }
      { props.children }
    </button>
  );
};

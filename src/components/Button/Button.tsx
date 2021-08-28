import classNames from "classnames";
import React from "react";
import { BEM } from "../../functions";
import { IButtonProps } from "../../props";

export const Button = ({ type = "button", ...props }: IButtonProps) => {
  const cx = new BEM("Button", {
    dashed: props.dashed,
    round: props.round,
    default: props.default,
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
      { props.children }
    </button>
  );
};

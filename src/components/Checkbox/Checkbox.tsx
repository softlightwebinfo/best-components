import React from "react";
import { BEM } from "../../functions";
import { ICheckboxProps } from "../../props/ICheckboxProps";

export const Checkbox = (props: ICheckboxProps) => {
  const cx = new BEM("Checkbox", {
    checked: props.checked,
    indeterminate: props.indeterminate,
    hasError: props.hasError,
    disabled: props.disabled,
    [props.type ?? "default"]: !!props.type,
  });
  cx.Append(props.className);
  return (
    <label className={ cx.toString() } style={ props.style }>
      <input
        className={ cx.Children("input") }
        type="checkbox"
        checked={ props.checked }
        onChange={ props.onChange }
        disabled={ props.disabled }
      />
      { props.label && <span className={ cx.Children("label") }>{ props.label }</span> }
    </label>
  );
};

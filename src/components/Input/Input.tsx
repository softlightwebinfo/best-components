import React, { forwardRef } from "react";
import { BEM } from "../../functions";
import { IInputProps } from "../../props";

export const Input = forwardRef(({ type = "text", ...props }: IInputProps, ref: any) => {
  const cs = new BEM("Input", {
    search: props.search,
    rounded: props.rounded,
    dark: props.dark,
  });
  cs.Append(props.className);

  if (props.search) {
    type = "search";
  }

  return (
    <div
      className={ cs.toString() }
      style={ props.style }
    >
      { props.search && (
        <i className={ cs.Children("icon", "fa fa-search") }/>
      ) }
      <input
        type={ type }
        onChange={ props.onChange }
        value={ props.value }
        placeholder={ props.placeholder }
        disabled={ props.disabled }
        readOnly={ props.readOnly }
        required={ props.required }
        autoFocus={ props.autoFocus }
        onBlur={ props.onBlur }
        onFocus={ props.onFocus }
        onKeyDown={ props.onKeyDown }
        onKeyUp={ props.onKeyUp }
        onKeyPress={ props.onKeyPress }
        min={ props.min }
        max={ props.max }
        minLength={ props.minLength }
        pattern={props.pattern}
        step={props.step}
        maxLength={ props.maxLength }
        ref={ ref }
      />
    </div>
  );
});

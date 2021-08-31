import React from "react";
import { BEM } from "../../functions";
import { ITextareaProps } from "../../props/ITextareaProps";

export const Textarea = (props: ITextareaProps) => {
  const cx = new BEM("Textarea", {});
  cx.Append(props.className);
  return (
    <textarea
      className={ cx.toString() }
      style={ props.style }
      onChange={ props.onChange }
      value={ props.value }
      placeholder={ props.placeholder }
      disabled={ props.disabled }
      readOnly={ props.readOnly }
    />
  );
};

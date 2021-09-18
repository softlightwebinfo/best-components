import React from "react";
import { BEM } from "../../functions";
import { IChipProps } from "../../props/IChipProps";
import { Button } from "../Button";

export const Chip = (props: IChipProps) => {
  const cx = new BEM("Chip", {});
  cx.Append(props.className);

  const onClose = (evt: any) => {
    evt.stopPropagation();
    props.onClose?.(evt);
  };

  return (
    <Button { ...props.buttonProps } className={ cx.toString() } style={ props.style } onClick={ props.onClick }>
      { props.label }
      <i onClick={ onClose } className={ cx.Children("close", "fa fa-times") }/>
    </Button>
  );
};

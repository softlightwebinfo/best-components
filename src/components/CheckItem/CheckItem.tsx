import React from "react";
import { BEM } from "../../functions";
import { ICheckItemProps } from "../../props/ICheckItemProps";
import { Checkbox } from "../Checkbox";
import { GroupToolbar } from "../Group/GroupToolbar";

export const CheckItem = (props: ICheckItemProps) => {
  const cx = new BEM("CheckItem", {
    checked: props.checked,
  });
  cx.Append(props.className);

  return (
    <GroupToolbar className={ cx.toString() } style={ props.style }>
      <i className="fa fa-bars"/>
      <Checkbox checked={ props.checked } onChange={ props.onChange }/>
      <span className={ cx.Children("content") }>{ props.title }</span>
    </GroupToolbar>
  );
};

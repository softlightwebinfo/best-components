import React from "react";
import { useSelectContext } from "../../context/selectContext";
import { BEM } from "../../functions";
import { ISelectNoResultsProps } from "../../props/ISelectNoResultsProps";

export const SelectNoResults = (props: ISelectNoResultsProps) => {
  const context = useSelectContext();
  const cx = new BEM("SelectNoResults", {});
  cx.Append(props.className);
  if (!!context.data.length) return null;
  if (context.groupBy && !!Object.keys(context.data).length) return null;
  return (
    <div className={ cx.toString() } style={ props.style }>No results</div>
  );
};

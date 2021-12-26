import React from "react";
import { BEM } from "../../functions";
import { ILoadingProps } from "../../props/ILoadingProps";
import { Spinner } from "./Spinner";

export const Loading = (props: ILoadingProps) => {
  const cx = new BEM("Loading", {});
  cx.Append(props.className);

  if (!props.show) return <>{ props.children }</>;

  return (
    <div className={ cx.toString() } style={ props.style }>
      { props.children }
      <Spinner/>
    </div>
  );
};

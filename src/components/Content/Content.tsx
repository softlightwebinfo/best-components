import React from "react";
import { BEM } from "../../functions";
import { IContentProps } from "../../props/IContentProps";

export const Content = (props: IContentProps) => {
  const cx = new BEM("Content", {
    noContent: true,
    isCenter: props.isCenter,
  });
  cx.Append(props.className);
  return (
    <div className={ cx.toString() } style={ props.style }>
      { props.children }
    </div>
  );
};

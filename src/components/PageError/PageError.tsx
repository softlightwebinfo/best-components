import React from "react";
import { BEM } from "../../functions";
import { IPageErrorProps } from "../../props/IPageErrorProps";

export const PageError = (props: IPageErrorProps) => {
  const cx = new BEM("PageError", {
    background: props.background,
    color: props.color,
  });
  cx.Append(props.className);
  return (
    <div className={ cx.toString() } style={ props.style }>
      <div className={ cx.Children("background") }>
        <div className={ cx.Children("content") }>
          <h1>{ props.code }</h1>
          <h2>{ props.title }</h2>
          <p>{ props.description }</p>
          <div className={ cx.Children("children") }>
            { props.children }
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { BEM } from "../../functions";
import { IPageProps } from "../../props/IPageProps";
import { Card } from "../Card";

export const Page = (props: IPageProps) => {
  const cx = new BEM("Page", {
    center: props.center,
    reverse: props.reverse,
  });
  cx.Append(props.className);

  return (
    <div className={ cx.toString() } style={ props.style }>
      { props.children ? (props.children) : (
        <div className={ cx.Children("content") }>
          <Card className={cx.Children("left")}>{ props.left }</Card>
          <div className={cx.Children("right")}>{ props.right }</div>
        </div>
      ) }
    </div>
  );
};

import React from "react";
import { BEM } from "../../functions";
import { IPageHeadingProps } from "../../props/IPageHeadingProps";

export const PageHeading = (props: IPageHeadingProps) => {
  const cx = new BEM("PageHeading", {});
  cx.Append(props.className);

  const style = {
    ...props.style,
    '--page-heading-background': `url(${ props.image })`,
    '--page-heading-opacity': props.opacity ? .6 : 1,
  };

  return (
    <div className={ cx.toString() } style={ style }>
      <div className={ cx.Children("image") }/>
      { props.children && (
        <div className={ cx.Children("content") }>
          { props.children }
        </div>
      ) }
    </div>
  );
};

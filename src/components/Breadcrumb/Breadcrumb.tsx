import React from "react";
import { BEM } from "../../functions";
import { IBreadcrumbProps } from "../../props/IBreadcrumbProps";

export const Breadcrumb = (props: IBreadcrumbProps) => {
  const cx = new BEM("Breadcrumb", {});
  cx.Append(props.className);
  return (
    <div className={ cx.toString() } style={ props.style }>
      { props.data.map((item, index) => {
        return (
          <div className={ cx.Children("item") } key={ index }>
            <a href={ item.url }>{ item.label }</a>
            { index < props.data.length - 1 && (<span><i className="fa fa-chevron-right"/></span>) }
          </div>
        );
      }) }
    </div>
  );
};

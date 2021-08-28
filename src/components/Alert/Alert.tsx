import React, { useMemo } from "react";
import { BEM } from "../../functions";
import { IAlertProps } from "../../props/IAlertProps";

export const Alert = ({ ...props }: IAlertProps) => {
  const cx = new BEM("Alert", {
    [props.type ?? '']: !!props.type,
  });
  cx.Append(props.className);

  const icon = useMemo(() => {
    switch (props.type) {
      case "alert":
        return "fa fa-exclamation";
      case "success":
        return "fa fa-check";
      case "warning":
        return "fa fa-exclamation-triangle";
      case "danger":
        return "fas fa-radiation";
      case "info":
        return "fa fa-info";
      case "primary":
        return "fa fa-asterisk";
      case "secondary":
        return "fa fa-angle-right";
      default:
      case "default":
        return "fa fa-chevron-circle-right";
    }
  }, [props.type]);

  return (
    <div className={ cx.toString() } style={ props.style }>
      { (props.icon || props.isIcon) && (
        <div className={ cx.Children("icon") }>
          { props.icon }
          { props.isIcon && (
            <i className={ icon }/>
          ) }
        </div>
      ) }
      <div className={ cx.Children("content") }>
        { props.title && (<h3 className={ cx.Children("title") }>{ props.title }</h3>) }
        <p className={ cx.Children("message") }>
          { props.message }
        </p>
        { props.actions && (
          <div className={ cx.Children("actions") }>
            { props.actions }
          </div>
        ) }
        { props.data && (
          <div className={ cx.Children("data") }>
            { props.data.map((item, index) => {
              return (
                <div key={ index } className={ cx.Children("item") }>
                  <i className={ "fa fa-arrow-right" }/>
                  { item }
                </div>
              );
            }) }
          </div>
        ) }
      </div>
      { (props.isCloseable || props.right) && (
        <div className={ cx.Children("right") }>
          { props.right }
          { props.isCloseable && (
            <span onClick={ props.onCloseable } className={ cx.Children("closeable") }>
          <i className={ "fa fa-times" }/>
          </span>
          ) }
        </div>
      ) }
    </div>
  );
};

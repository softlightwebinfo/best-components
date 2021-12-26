import React from "react";
import { ButtonRaiser } from "../../components/Button/ButtonRaiser";
import { Value } from "../../components/Value/Value";
import { BEM } from "../../functions";
import { IStatButtonProps } from "../../props/IStatButtonProps";
import { Widget } from "../Widget";

export const StatButtonWidget = (props: IStatButtonProps) => {
  const cx = new BEM("StatButtonWidget", {});
  cx.Append(props.className);

  return (
    <Widget className={ cx.toString() } style={ props.style }>
      <ButtonRaiser theme={ "warning" }>Open Tickets</ButtonRaiser>
      <div>
        <Value>{ props.number }</Value>
        <span>{ props.title }</span>
      </div>
      <div>
        <i className={ `fa fa-${ props.previousNumber > props.number ? "arrow-down" : "arrow-up" }` }/>
        { props.subTitle }
      </div>
    </Widget>
  );
};

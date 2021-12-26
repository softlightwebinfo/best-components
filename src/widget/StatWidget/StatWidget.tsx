import React from "react";
import { SubTitle, Title } from "../../components";
import Progress from "../../components/Progress";
import { BEM } from "../../functions";
import { IStatWidgetProps } from "../../props/IStatWidgetProps";
import { Widget } from "../Widget";

export const StatWidget = (props: IStatWidgetProps) => {
  const cx = new BEM("StatWidget", {});
  cx.Append(props.className);

  return (
    <Widget className={ cx.toString() } style={ props.style }>
      <Title>{ props.title }</Title>
      <SubTitle>{ props.subtitle }</SubTitle>
      <Progress theme={ props.theme } value={ props.progress }/>
    </Widget>
  );
};

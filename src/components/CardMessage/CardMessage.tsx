import React from "react";
import { BEM } from "../../functions";
import { ICardMessageProps } from "../../props";
import { Card, CardBody } from "../Card";
import { TitleSubtitle } from "../TitleSubtitle";

export const CardMessage = (props: ICardMessageProps) => {
  const cx = new BEM("CardMessage", {
    between: props.between,
    noContent: !props.children,
    noBorder: props.noBorder,
  });
  cx.Append(props.className);
  return (
    <Card className={ cx.toString() } style={ {
      ...props.style,
      ...props.color ? {
        "--card-message-border": props.color,
      } : {},
    } }>
      <CardBody className={ cx.Children("body") }>
        <TitleSubtitle { ...props } className={ cx.Children("title") }/>
        { props.children }
      </CardBody>
    </Card>
  );
};

import React from "react";
import { BEM } from "../../functions";
import { ICardHeadingProps } from "../../props/ICardHeadingProps";
import { Card } from "../Card/Card";
import { CardBody } from "../Card/CardBody";
import { CardFooter } from "../Card/CardFooter";
import { CardHeader } from "../Card/CardHeader";
import { CardTitle } from "../Card/CardTitle";

export const CardHeading = (props: ICardHeadingProps) => {
  const cx = new BEM("CardHeading", {});
  cx.Append(props.className);

  return (
    <Card className={ cx.toString() } style={ props.style }>
      <CardHeader>
        <CardTitle>
          { props.title && (
            <h3>{ props.title }</h3>
          ) }
          { props.subTitle && (
            <p>{ props.subTitle }</p>
          ) }
        </CardTitle>
        { props.actions }
      </CardHeader>
      <CardBody>{ props.children }</CardBody>
      { props.footer && (
        <CardFooter>{ props.footer }</CardFooter>
      ) }
    </Card>
  );
};

import React from "react";
import { BEM } from "../../functions";
import { ICardIconProps } from "../../props/ICardIconProps";
import { Avatar } from "../Avatar";
import { Card, CardBody } from "../Card";

export const CardIcon = (props: ICardIconProps) => {
  const cx = new BEM("CardIcon", {});
  cx.Append(props.className);

  return (
    <Card className={ cx.toString() } style={ props.style }>
      <div className={cx.Children("avatar")}>
        <Avatar size={"lg"} children={ props.icon }/>
      </div>
      <CardBody>{ props.children }</CardBody>
    </Card>
  );
};

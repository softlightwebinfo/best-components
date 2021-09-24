import React from "react";
import { BEM } from "../../functions";
import { IAvatarUserProps } from "../../props/IAvatarUserProps";
import { Avatar } from "../Avatar";
import { TitleSubtitle } from "../TitleSubtitle/TitleSubtitle";

export const AvatarUser = ({ size = "lg", ...props }: IAvatarUserProps) => {
  const cx = new BEM("AvatarUser", {});
  cx.Append(props.className);

  return (
    <div className={ cx.toString() } style={ props.style }>
      <Avatar size={ size } name={ props.title } image={ props.image }/>
      <TitleSubtitle title={ props.title } subTitle={ props.subTitle }>{props.content}</TitleSubtitle>
      { props.children }
    </div>
  );
};

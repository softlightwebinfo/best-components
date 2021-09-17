import React from "react";
import { BEM } from "../../functions";
import { ITitleSubtitleProps } from "../../props/ITitleSubtitleProps";
import { SubTitle } from "../Subtitle/SubTitle";
import { Title } from "../Titlte/Title";

export const TitleSubtitle = (props: ITitleSubtitleProps) => {
  const cx = new BEM("TitleSubtitle", {});
  cx.Append(props.className);
  return (
    <div className={ cx.toString() } style={ props.style }>
      <Title>{ props.title }</Title>
      <SubTitle className={ cx.Children("subTitle") }>{ props.subTitle }</SubTitle>
    </div>
  );
};

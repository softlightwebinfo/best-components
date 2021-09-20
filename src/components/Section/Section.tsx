import React from "react";
import { BEM } from "../../functions";
import { ISectionProps } from "../../props/ISectionProps";
import { SubTitle } from "../Subtitle";
import { Title } from "../Titlte";

export const Section = (props: ISectionProps) => {
  const cx = new BEM("Section", {});
  cx.Append(props.className);

  return (
    <section className={ cx.toString() } style={ props.style }>
      <header className={ cx.Children("header") }>
        <Title>{ props.title }</Title>
        <SubTitle>{ props.subTitle }</SubTitle>
      </header>
      { props.children && (
        <div className={ cx.Children("content") }>
          { props.children }
        </div>
      ) }
    </section>
  );
};

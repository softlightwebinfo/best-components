import React from "react";
import { BEM } from "../../functions";
import { IPageHeaderProps } from "../../props/IPageHeaderProps";
import { SubTitle } from "../Subtitle";
import { Title } from "../Titlte";

export const PageHeader = (props: IPageHeaderProps) => {
  const cx = new BEM("PageHeader", {});
  cx.Append(props.className);

  return (
    <section className={ cx.toString() } style={ props.style }>
      <header className={ cx.Children("header") }>
        <div className={ cx.Children("left") }>
          { props.onBack && (
            <div className={ cx.Children("icon") } onClick={ props.onBack }>
              <i className={ cx.Children("back", "fa fa-arrow-left") }/>
            </div>
          ) }
          <div className={ cx.Children("header-content") }>
            <Title className={ cx.Children("title") }>{ props.title }</Title>
            <SubTitle className={ cx.Children("subTitle") }>{ props.subTitle }</SubTitle>
          </div>
        </div>
        <div className={ cx.Children("extra") }>{ props.extra }</div>
      </header>
      { props.children && (
        <div className={ cx.Children("content") }>
          { props.children }
        </div>
      ) }
    </section>
  );
};

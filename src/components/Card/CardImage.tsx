import React from "react";
import { BEM } from "../../functions";
import { ICardImageProps } from "../../props/ICardImageProps";

export const CardImage = (props: ICardImageProps) => {
  const cx = new BEM("CardImage", {

  });
  cx.Append(props.className);
  return (
    <div
      className={ cx.toString() }
      style={ {
        ...props.style,
      } }
    >
      <img src={ props.src } alt={ props.alt }/>
      { props.children }
    </div>
  );
};

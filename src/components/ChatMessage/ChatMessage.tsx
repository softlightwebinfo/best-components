import React from "react";
import { IChatMessageProps } from "../../data/IChatMessageProps";
import { BEM } from "../../functions";

export const ChatMessage = (props: IChatMessageProps) => {
  const cx = new BEM("ChatMessage", {
    isMy: props.isMy,
  });
  cx.Append(props.className);
  return (
    <div className={ cx.toString() } style={ props.style }>
      <div>
        { props.name }
      </div>
      <div className={ cx.Children("message") }>{ props.message }</div>
      <div>{ props.date }</div>
    </div>
  );
};

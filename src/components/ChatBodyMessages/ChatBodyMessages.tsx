import React from "react";
import { BEM } from "../..";
import { useContactAppProvider } from "../../context/ContactAppProvider";
import { IChatBodyMessagesProps } from "../../props/IChatBodyMessagesProps";
import { ChatMessage } from "../ChatMessage/ChatMessage";

export const ChatBodyMessages = (props: IChatBodyMessagesProps) => {
  const app = useContactAppProvider();

  const cx = new BEM("ChatBodyMessages", {});
  cx.Append(props.className);

  return (
    <div className={ cx.toString() } style={ props.style } ref={app.refBody}>
      { app.messages.map((item, index) => (
        <ChatMessage key={ index } { ...item }/>
      )) }
    </div>
  );
};

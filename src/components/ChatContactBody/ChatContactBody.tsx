import React from "react";
import { IChatContactBodyProps } from "../../props/IChatContactBodyProps";
import { ChatBodyMessages } from "../ChatBodyMessages/ChatBodyMessages";
import { ChatSendMessage } from "../ChatSendMessage/ChatSendMessage";

export const ChatContactBody = (props: IChatContactBodyProps) => {
  return (
    <>
      <ChatBodyMessages/>
      <ChatSendMessage/>
    </>
  );
};

import { useLocalStorage, useToggle } from "@codeunic/library-hooks";
import React, { createContext, useContext, useEffect, useState } from "react";
import { IMessage } from "../interfaces/IMessage";
import { IContactAppProviderProps } from "../props/IContactAppProviderProps";

export interface IContactAppContext {
  messages: IMessage[];
  show: boolean;
  showStartApp: boolean;
  message: string;

  toggle?(): void;

  startApp?(): any;

  onChange?(evt: any): any;

  addMessage?(item: string): void;

  onSubmit?(ev: any): any;

  setMessagesChat?(messages: IMessage[]): void;

  addMessageChat?(message: IMessage): void;
}

export const ContactAppContext = createContext<IContactAppContext>({
  show: false,
  showStartApp: false,
  message: "",
  messages: [],
});

export const useContactAppProvider = () => useContext(ContactAppContext);

export const ContactAppProvider = (props: IContactAppProviderProps) => {
  const [show, { toggle }] = useToggle();
  const [showStartApp, { toggle: startApp, on: onStartApp }] = useToggle();
  const [message, onChange] = useState<string>("");
  const [messages, setMessagesChat] = useState<IMessage[]>([]);

  const [localChat, setLocalChat] = useLocalStorage("chat", {});

  const loadMessages = async () => {
    try {
      const messages = await props.onLoadMessages?.();

      setMessagesChat(messages ?? []);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadMessages();
  }, [props.onLoadMessages]);

  useEffect(() => {
    if (localChat.initialize) {
      onStartApp();
      props.startApp?.();
    }
  }, [localChat?.initialize]);

  useEffect(() => {
    props.addMessageChat?.(message);
  }, [message]);

  const value: IContactAppContext = {
    show,
    showStartApp,
    toggle,
    startApp() {
      setLocalChat({ initialize: true });
    },
    message,
    messages,
    setMessagesChat,
    addMessageChat(message: IMessage) {
      setMessagesChat(msg => ([...msg, message]));
    },
    onChange(evt) {
      onChange(evt.target.value);
    },
    addMessage(item: string) {
      onChange(prv => [prv, item].join(" "));
    },
    onSubmit(ev): any {
      ev.preventDefault();
      props.onSubmit?.(ev, message);
    },
  };

  return (
    <ContactAppContext.Provider value={ value }>
      { props.children(value) }
    </ContactAppContext.Provider>
  );
};

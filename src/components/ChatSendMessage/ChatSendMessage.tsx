import React from "react";
import { BEM, Button, Dropdown } from "../..";
import { useContactAppProvider } from "../../context/ContactAppProvider";
import { emoji } from "../../data/emojis";
import { useI18 } from "../../hooks/useI18";
import { IChatSendMessageProps } from "../../props/IChatSendMessageProps";

export const ChatSendMessage = (props: IChatSendMessageProps) => {
  const app = useContactAppProvider();
  const i18 = useI18();

  const cx = new BEM("ChatSendMessage", {});
  cx.Append(props.className);

  return (
    <form onSubmit={ app.onSubmit } className={ cx.toString() } style={ props.style }>
      <input
        type="text"
        placeholder={ i18.get("writeMessage") }
        onChange={ app.onChange }
        value={ app.message }
        autoFocus
      />
      <Dropdown placement={ "top-left" } trigger={ <Button default icon={ <i className={ "fa fa-smile-beam" }/> }/> }>
        <div className={ cx.Children("emojis") }>
          { emoji.map((item, index) => (
            <span
              key={ index }
              onClick={ () => app.addMessage?.(item) }
            >
              { item }
            </span>
          )) }
        </div>
      </Dropdown>
      <Button type={ "submit" } default icon={ <i className={ "fa fa-paper-plane" }/> }/>
    </form>
  );
};

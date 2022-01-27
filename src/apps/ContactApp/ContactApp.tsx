import React, { forwardRef } from "react";
import { Fab } from "../../components";
import { ChatContact } from "../../components/ChatContact/ChatContact";
import { ContactAppProvider } from "../../context/ContactAppProvider";
import { BEM } from "../../functions";
import { IContactAppProps } from "../../props/IContactAppProps";

export const ContactApp = forwardRef((props: IContactAppProps, ref: any) => {
  const cx = new BEM("ContactApp", {
    relative: props.relative,
  });
  cx.Append(props.className);

  return (
    <ContactAppProvider
      initialOpen={ props.initialOpen }
      onLoadMessages={ props.onLoadMessages }
      onSubmit={ props.onSubmit }
      startApp={ props.startApp }
      addMessageChat={ props.addMessageChat }
      onLoadEndMessages={ props.onLoadEndMessages }
      onToggle={ props.onToggle }
      ref={ ref }
    >
      { ({ show, toggle }) => (
        <div className={ cx.toString() } style={ props.style }>
          { (props.relative || show) && (
            <ChatContact
              mute={props.mute}
              description={ props.description }
              dropdownSettings={ props.dropdownSettings }
              onClickMute={ props.onClickMute }
            />
          ) }
          { (!props.relative || !show) && (
            <Fab
              onClick={ toggle }
              icon={ <i style={ { fontSize: 20 } } className={ "fa fa-comment" }/> }
              {...props.fab}
            />
          ) }
        </div>
      ) }
    </ContactAppProvider>
  );
});

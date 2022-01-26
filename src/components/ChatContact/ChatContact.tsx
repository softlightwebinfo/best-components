import React from "react";
import { useContactAppProvider } from "../../context/ContactAppProvider";
import { BEM } from "../../functions";
import { useI18 } from "../../hooks/useI18";
import { IChatContactProps } from "../../props/IChatContactProps";
import { Button } from "../Button";
import { Card, CardBody, CardHeader } from "../Card";
import { CardIcon } from "../CardIcon/CardIcon";
import { Center } from "../Center";
import { ChatContactBody } from "../ChatContactBody/ChatContactBody";
import { Dropdown, DropdownItem } from "../Dropdown";
import { SpaceBetween } from "../SpaceBetween/SpaceBetween";
import { SubTitle } from "../Subtitle";
import { Title } from "../Titlte";

export const ChatContact = (props: IChatContactProps) => {
  const i18 = useI18();
  const app = useContactAppProvider();

  const cx = new BEM("ChatContact", {});
  cx.Append(props.className);

  const onClose = () => {
    app.toggle?.();
    props.onClose?.();
  };

  return (
    <Card className={ cx.toString() } style={ props.style }>
      <CardHeader>
        <SpaceBetween>
          <Dropdown trigger={ <Button round icon={ <i className={ "fa fa-ellipsis-v" }/> }/> }>
            <DropdownItem onClick={props.onClickMute} icon={ <i className={ "fa fa-volume-mute" }/> }>{ i18.get("mute") }</DropdownItem>
            {props.dropdownSettings}
          </Dropdown>
          <Title>{ i18.get("chatContactTitle") }</Title>
          <Button round icon={ <i className={ "fa fa-minus" }/> } onClick={ onClose }/>
        </SpaceBetween>
      </CardHeader>
      { !app.showStartApp ? (
        <CardBody>
          <CardIcon
            icon={ <i className={ "fa fa-user" }/> }
          >
            <SubTitle style={ { color: "white", textAlign: "center" } }>
              { props.description ?? i18.get("chatContactDescription") }
            </SubTitle>
            <Center style={ { marginTop: 20 } }>
              <Button onClick={ app.startApp } round primary>{ i18.get("chatContactButton") }</Button>
            </Center>
          </CardIcon>
        </CardBody>
      ) : (<ChatContactBody/>) }
    </Card>
  );
};

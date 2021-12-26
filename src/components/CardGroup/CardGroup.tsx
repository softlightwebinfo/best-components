import React from "react";
import { BEM } from "../../functions";
import { ICardGroupProps } from "../../props/ICardGroupProps";
import { Button } from "../Button";
import { Card, CardBody, CardFooter, CardHeader } from "../Card";
import { CardList } from "../CardList";
import { Dropdown, DropdownItem } from "../Dropdown";
import { Group } from "../Group";
import { TitleSubtitle } from "../TitleSubtitle";

export const CardGroup = (props: ICardGroupProps) => {
  const cx = new BEM("CardGroup", {});
  cx.Append(props.className);

  return (
    <Card className={ cx.toString() } style={ props.style }>
      <CardHeader>
        <Group>
          <TitleSubtitle
            title={ props.title }
            subTitle={ props.subTitle }
          />
          <Dropdown
            placement={ "bottom-left" }
            trigger={ <Button round primary icon={ <i className={ "fa fa-ellipsis-v" }/> }/> }
          >
            { props.actions?.map((action, index) => (
              <DropdownItem key={ index }>{ action.label }</DropdownItem>
            )) }
          </Dropdown>
        </Group>
      </CardHeader>
      <CardBody>
        <CardList noBorder noBorderItems>
          { props.children }
        </CardList>
      </CardBody>
      <CardFooter>
        <Button size={ "lg" } default>{props.buttonText}</Button>
      </CardFooter>
    </Card>
  );
};

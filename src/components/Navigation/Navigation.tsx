import React, { Fragment, useState } from "react";
import { BEM } from "../../functions";
import { INavigationProps, TNavigationData } from "../../props/INavigationProps";
import { Badge } from "../Badge";
import { Group } from "../Group";
import { Heading } from "../Heading/Heading";
import { Item } from "../Item";

export const Navigation = (props: INavigationProps) => {
  const cx = new BEM("Navigation", {});
  cx.Append(props.className);
  const [open, setOpen] = useState(props.initialOpen ?? []);

  const onSelect = (value: TNavigationData) => {
    if (value.key && value.menu) {
      if (open.includes(value.key)) {
        setOpen(p => p.filter(i => i != value.key));
      } else {
        setOpen([...open, value.key]);
      }
    }
    props.onSelect?.(value);
  };

  return (
    <div className={ cx.toString() } style={ props.style }>
      { props.data.map((value, index) => {
        const openData = open.includes(value.key ?? '');
        if (value.heading) {
          return (<Heading key={ index }>{ value.heading }</Heading>);
        }

        return (
          <Fragment key={ index }>
            <Item active={ openData }>
              <Group onClick={ () => onSelect(value) }>
                <span>
                  { value.icon && (<span className={ cx.Children("icon") }>{ value.icon }</span>) }
                  { value.label }
                </span>
                <div>
                  { value.badge && <Badge label={ value.badge }/> }
                  { value.menu && <i className={ cx.Children("arrow", openData ? "fa fa-chevron-down" : "fa" +
                    " fa-chevron-left") }/> }
                </div>
              </Group>
            </Item>
            { (value.menu && openData) && (
              <Navigation onSelect={ props.onSelect } initialOpen={ props.initialOpen } data={ value.menu }/>
            ) }
          </Fragment>
        );
      }) }
    </div>
  );
};

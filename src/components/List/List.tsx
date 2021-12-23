import React from "react";
import { BEM } from "../../functions";
import { IListProps } from "../../props/IListProps";
import { Item } from "../Item";

export const List = (props: IListProps) => {
  const cx = new BEM("List", {});
  cx.Append(props.className);

  if (!props.list) return null;

  return (
    <ul className={ cx.toString() } style={ props.style }>
      { props.list.map((item, index) => (
        <li key={ index }>
          <Item
            onClick={ () => props.onClick?.(item, index) }
            active={ props.active == item.value }
            icon={ item.icon }
          >
            { item.label }
          </Item>
        </li>
      )) }
    </ul>
  );
};

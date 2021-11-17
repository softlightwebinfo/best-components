import React from "react";
import { useSelectContext } from "../../context/selectContext";
import { BEM } from "../../functions";
import { ISelectItemProps } from "../../props/ISelectItemProps";
import { Item } from "../Item";

export const SelectItem = (props: ISelectItemProps) => {
  const context = useSelectContext();

  const cx = new BEM("SelectItem", {
    subItem: props.subItem,
    select: context.select,
  });

  cx.Append(props.className);

  const onClick = () => {
    context?.onSelect?.(props.value, props.item);
    props?.onSelect?.(props.value, props.item);
  };

  const Content = (_pr: any) => (
    <>
      { props.label }
    </>
  );

  return (
    <Item onClick={ onClick } className={ cx.toString() } style={ props.style }>
      { context?.renderMenuItem?.(props.label, Content, props.item) ?? <Content/> }
    </Item>
  );
};

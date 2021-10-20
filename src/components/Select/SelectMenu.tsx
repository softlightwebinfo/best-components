import React from "react";
import { useSelectContext } from "../../context/selectContext";
import { BEM } from "../../functions";
import { ISelectMenuProps } from "../../props/ISelectMenuProps";
import { Input } from "../Input";
import { InputGroup } from "../InputGroup/InputGroup";
import { InputGroupAddon } from "../InputGroup/InputGroupAddon";

export const SelectMenu = (props: ISelectMenuProps) => {
  const context = useSelectContext();
  const onChange = (evt: any) => {
    context?.setSearch?.(evt.target.value);
  };

  const cx = new BEM("SelectMenu", {});
  cx.Append(props.className);

  return (
    <div className={ cx.toString() } style={ props.style }>
      { context.showSearch && (
        <div className={ cx.Children("search") }>
          <InputGroup>
            <Input onChange={ onChange } value={ context.search } placeholder={ props.placeholder ?? "Search" }/>
            <InputGroupAddon>
              <i className={ "fa fa-search" }/>
            </InputGroupAddon>
          </InputGroup>
        </div>
      ) }
      <div className={ cx.Children("content") }>
        { props.children }
      </div>
    </div>
  );
};

import React, { useMemo, useRef, useState } from "react";
import { SelectContext } from "../../context/selectContext";
import { BEM } from "../../functions";
import { useOutside } from "../../hooks/useOutside";
import { ISelectPickerData } from "../../interfaces/ISelectPickerData";
import { ISelectProps } from "../../props/ISelectProps";
import { Button } from "../Button";
import { SelectMenu } from "./SelectMenu";
import { SelectMenuItems } from "./SelectMenuItems";
import { SelectMenuItemsGroup } from "./SelectMenuItemsGroup";
import { SelectNoResults } from "./SelectNoResults";

export const Select = (props: ISelectProps) => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  useOutside(ref, open, () => setOpen(false));

  const [search, setSearch] = useState("");
  const [select, setSelect] = useState<ISelectPickerData>(props.initialSelect);

  const cx = new BEM("Select", {});
  cx.Append(props.className);

  const {
    showSearch,
  } = props;

  const data = useMemo(() => {
    const group = () => {
      if (!search) return props.data;
      return props.data.filter(item => {
        return item.value.toLowerCase().trim().includes(search) ||
          item.label.toLowerCase().trim().includes(search);
      });
    };

    if (!props.groupBy) {
      return group();
    }

    return group().reduce((previousValue, currentValue) => {
      // @ts-ignore
      if (!previousValue[currentValue[props.groupBy]]) {
        // @ts-ignore
        previousValue[currentValue[props.groupBy]] = [];
      }
      // @ts-ignore
      previousValue[currentValue[props.groupBy]].push(currentValue);
      return previousValue;
    }, {});

  }, [search, props.groupBy, props.data]);

  const value = {
    groupBy: props.groupBy,
    isSelect: true,
    showSearch,
    data,
    search,
    select,
    setSearch,
    renderMenuItem: props.renderMenuItem,
    renderMenuGroup: props.renderMenuGroup,
    renderValue: props.renderValue,
    block: props.block,
    onSelect: (value: string, item: any) => {
      props?.onSelect?.(value, item);
      setOpen(false);
      setSelect(item);
    },
  };

  const Content = () => (
    <>
      <span>{ select ? select.label : props.placeholder ?? "Select" }</span>
    </>
  );

  const onDelete = (evt: { stopPropagation: () => void; }) => {
    evt.stopPropagation();
    // @ts-ignore
    setSelect(undefined);
    props?.onSelect?.("", null);
  };

  const valueSelect = select ? props.renderValue?.(select?.label, select, Content) ?? <Content/> : <Content/>;

  return (
    <SelectContext.Provider value={ value }>
      <div ref={ ref } className={ cx.toString() } style={ props.style }>
        <div>
          <Button
            { ...props.button }
            className={ cx.Children("button", props?.button?.className) }
            style={ props.styleButton }
            onClick={ () => setOpen(!open) }
          >
            { valueSelect }
            <div className={ cx.Children("right-icon") }>
              { select && <i onClick={ onDelete } className={ cx.Children("icon", "fa fa-times") }/> }
              <i className={ cx.Children("icon", open ? "fa fa-chevron-up" : "fa fa-chevron-down") }/>
            </div>
          </Button>
        </div>
        { open && (
          <SelectMenu>
            <SelectNoResults/>
            <SelectMenuItems/>
            <SelectMenuItemsGroup/>
          </SelectMenu>
        ) }
      </div>
    </SelectContext.Provider>
  );
};

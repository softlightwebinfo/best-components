import React from "react";
import { useSelectContext } from "../../context/selectContext";
import { ISelectPickerData } from "../../interfaces/ISelectPickerData";
import { ISelectMenuItemProps } from "../../props/ISelectMenuItemProps";
import { SelectItem } from "./SelectItem ";

export const SelectMenuItems = (props: ISelectMenuItemProps) => {
  const cx = useSelectContext();
  if (cx.groupBy) {
    return null;
  }
  const data: any = props.data ?? cx.data;
  return (
    <>
      { data.map((item: ISelectPickerData, index: number) => {
        return (
          <SelectItem { ...item } item={ item } key={ index }/>
        );
      }) }
    </>
  );
};

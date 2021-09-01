import React from "react";
import { useSelectContext } from "../../context/selectContext";
import { ISelectPickerData } from "../../interfaces/ISelectPickerData";
import { ISelectItemProps } from "../../props/ISelectItemProps";
import { ISelectMenuItemsGroupProps } from "../../props/ISelectMenuItemsGroupProps";
import { SelectItem } from "./SelectItem ";
import { SelectMenuDropdown } from "./SelectMenuDropdown";

export const SelectMenuItemsGroup = (props: ISelectMenuItemsGroupProps) => {
  const cx = useSelectContext();

  if (!cx.groupBy) return null;
  const data: Record<string, ISelectPickerData[]> | ISelectPickerData[] = props.data ?? cx.data;

  return (
    <>
      { Object.entries(data).map(([key, value], index) => {
        return (
          <SelectMenuDropdown label={ key } key={ key }>
            { value.map((item: JSX.IntrinsicAttributes & ISelectItemProps, itemIndex: React.Key | null | undefined) => (
              <SelectItem { ...item } item={ item } key={ itemIndex } subItem/>
            )) }
          </SelectMenuDropdown>
        );
      }) }
    </>
  );
};

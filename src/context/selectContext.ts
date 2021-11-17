import { createContext, useContext } from "react";
import { ISelectPickerData } from "../interfaces/ISelectPickerData";

export interface ISelectContext {
  showSearch?: boolean;
  data: ISelectPickerData[] | Record<string, ISelectPickerData[]>;
  isSelect?: boolean;
  search?: string | undefined;
  setSearch?: (evt: any) => void;
  onSelect?: (value: string, item: any) => void;
  groupBy?: string;
  select?: ISelectPickerData;
  block?: boolean;
  renderMenuItem?: (label: string, Content: any, item: any) => any;

  renderMenuGroup?(e: any, cp: any): any;
}

export const SelectContext = createContext<ISelectContext>({
  data: [],
});
export const useSelectContext = () => useContext(SelectContext);

import { IProps } from "../interfaces";
import { ISelectPickerData } from "../interfaces/ISelectPickerData";

export interface ISelectMenuItemsGroupProps extends IProps {
  data?: Record<string, ISelectPickerData[]>;
}

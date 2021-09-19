import { IProps } from "../interfaces";

export interface ITimePickerProps extends IProps {

}

export interface ITimePickerItemProps extends IProps {
  onClick?: (evt: any) => void;
  activeLabel: number | string;
  active?: boolean;
  label: number | string;
}

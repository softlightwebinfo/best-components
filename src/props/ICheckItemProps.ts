import { IProps } from "../interfaces/IProps";

export interface ICheckItemProps extends IProps {
  checked: boolean;
  title: string;

  onChange(evt: any): any;
}

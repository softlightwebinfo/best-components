import { IProps } from "../interfaces";

export interface IGroupProps extends IProps {
  onClick?: (evt: any) => void;
  column?: boolean;
  default?: boolean;
}

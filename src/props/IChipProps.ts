import { IProps } from "../interfaces";
import { IButtonProps } from "./IButtonProps";

export interface IChipProps extends IProps {
  onClick?: (evt: any) => void;
  onClose?: (evt: any) => void;
  buttonProps?: IButtonProps;
  label: string;
}

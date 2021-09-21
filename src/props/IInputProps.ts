import { IProps } from "../interfaces";
import { TInputType } from "../types";

export interface IInputProps extends IProps {
  type?: TInputType;
  value?: string;
  placeholder?: string;
  dark?: boolean;
  rounded?: boolean;
  search?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  onChange?: (evt: any) => void;
}

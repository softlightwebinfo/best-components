import { IProps } from "../interfaces";
import { TInputType } from "../types";

export interface IInputProps extends IProps {
  type?: TInputType;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  onChange?: (evt: any) => void;
}

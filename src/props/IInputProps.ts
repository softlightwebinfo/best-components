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
  autoFocus?: boolean;
  onChange?: (evt: any) => void;
  onKeyDown?: (evt: any) => void;
  onKeyUp?: (evt: any) => void;
  onKeyPress?: (evt: any) => void;
  onBlur?: (evt: any) => void;
  onFocus?: (evt: any) => void;
  min?: number;
  max?: number;
  maxLength?: number;
  step?: number | string;
  pattern?: string;
  minLength?: number;
}

import { IProps } from "../interfaces";

export interface ITextareaProps extends IProps {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  onChange?: (evt: any) => void;
}

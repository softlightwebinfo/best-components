import { IProps } from "../interfaces";

export interface ICheckboxProps extends IProps {
  onChange?: (event: any) => void;
  disabled?: boolean;
  hasError?: boolean;
  indeterminate?: boolean;
  checked?: boolean;
  label: string;
  type?: TCheckboxType;
}

export type TCheckboxType = "default" | "switch";

import { CSSProperties } from "react";
import { IProps } from "../interfaces";
import { ISelectMethod, ISelectPickerData } from "../interfaces/ISelectPickerData";
import { IButtonProps } from "./IButtonProps";

export interface ISelectProps extends IProps, ISelectMethod {
  showSearch?: boolean;
  button?: Partial<IButtonProps>;
  styleButton?: CSSProperties;
  initialOpen?: boolean;
  data: ISelectPickerData[];
  onSelect?: (value: string, item: any) => void;
  groupBy?: string;
  placeholder?: string;
  block?: boolean;
  initialSelect?: ISelectPickerData | any | undefined;
}

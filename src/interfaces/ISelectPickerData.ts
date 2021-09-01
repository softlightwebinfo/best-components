import { ReactNode } from "react";

export interface ISelectPickerData {
  label: string;
  value: string;

  [p: string]: any;
}

export interface ISelectMethod {
  renderMenuItem?: (label: string, item: ReactNode) => ReactNode;
  renderMenuGroup?: (label: string | ReactNode, item: TSelectRenderMenuGroupItem) => ReactNode;
  renderValue?: (label: string | undefined, select: ISelectPickerData | undefined, Content: () => JSX.Element) => ReactNode;
}

export type TSelectRenderMenuGroupItem = { children: any, component: ReactNode, props: any }

import { ReactNode } from "react";
import { IProps } from "../interfaces";

export interface IDialogProps extends IProps {
  open?: boolean;
  footer?: ReactNode;
  header?: ReactNode;
  onCLickOutSide?: (evt: any) => void;
}

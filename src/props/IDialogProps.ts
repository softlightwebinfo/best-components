import { IProps } from "../interfaces";

export interface IDialogProps extends IProps {
  onCLickOutSide?: (evt: any) => void;
}

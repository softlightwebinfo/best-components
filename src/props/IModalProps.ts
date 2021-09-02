import { IProps } from "../interfaces";

export interface IModalProps extends IProps {
  onClose?: (evt: any, ref: any) => void;
}

import { IProps } from "../interfaces";

export interface IChatContactProps extends IProps {
  description?: string;
  onClose?(): void;
}

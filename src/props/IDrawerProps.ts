import { IProps } from "../interfaces";

export interface IDrawerProps extends IProps {
  open: boolean;

  onClose?(): void;
}

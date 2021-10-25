import { IProps } from "../interfaces";

export interface IDrawerProps extends IProps {
  open: boolean;
  isCloseable?: boolean;

  onClose?(): void;
}

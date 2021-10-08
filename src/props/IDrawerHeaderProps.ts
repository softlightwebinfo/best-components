import { IProps } from "../interfaces";

export interface IDrawerHeaderProps extends IProps {
  title: string;

  onClose?(): void;
}

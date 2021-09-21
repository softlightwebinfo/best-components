import { IProps } from "../interfaces";

export interface IPageErrorProps extends IProps {
  background?: boolean;
  color?: boolean;
  code: string | number;
  title: string;
  description: string;
}

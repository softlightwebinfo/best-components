import { IProps } from "../interfaces";

export interface IRatingProps extends IProps {
  onChange?: (select: number) => any;
  stars?: number;
  initialSelected?: number;
}

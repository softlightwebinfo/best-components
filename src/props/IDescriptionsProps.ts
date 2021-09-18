import { IProps } from "../interfaces";
import { TSize } from "../types";

export interface IDescriptionsProps extends IProps {
  size?: TSize;
  column: number;
}

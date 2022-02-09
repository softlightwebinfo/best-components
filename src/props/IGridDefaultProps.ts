import { IProps } from "../interfaces";

export interface IGridDefaultProps extends IProps {
  autoMapper?: string[];
  margin?: boolean;
  auto?: number;
  col?: number;
  sm?: number;
  xs?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
  autoMin?: number;
  autoMax?: number;
}

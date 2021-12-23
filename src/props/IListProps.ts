import { ICategory } from "../interfaces/ICategory";
import { IProps } from "../interfaces/IProps";

export interface IListProps extends IProps {
  active?: string;
  list: ICategory[];

  onClick?(item: ICategory, index: number): void;
}

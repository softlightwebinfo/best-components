import { IProps } from "../interfaces";

export interface ICardGridListProps extends IProps {
  data: ICardGridListItem[];
}

export interface ICardGridListItem {
  title: string;
  message: string;
}

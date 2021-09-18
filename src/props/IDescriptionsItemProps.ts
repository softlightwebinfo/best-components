import { IProps } from "../interfaces";

export interface IDescriptionsItemProps extends IProps {
  position?: "horizontal" | "vertical";
  label: string;
}

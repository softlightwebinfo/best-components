import { ReactNode } from "react";
import { IProps } from "../interfaces";

export interface INavigationProps extends IProps {
  initialOpen?: string[];
  data: TNavigationData[];
  onSelect?: (value: TNavigationData) => void;
}

export type TNavigationData = {
  key?: string;
  heading?: string;
  label?: string | ReactNode;
  icon?: ReactNode;
  badge?: string;
  menu?: TNavigationData[];
  noClick?: boolean;
};

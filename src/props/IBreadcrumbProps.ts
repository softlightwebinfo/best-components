import { ReactNode } from "react";
import { IProps } from "../interfaces";

export interface IBreadcrumbProps extends IProps {
  data: IBreadcrumbData[];
}

export interface IBreadcrumbData {
  label: string;
  url?: string;
}

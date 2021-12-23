import { ReactNode } from "react";

export interface ICategory {
  value: string;
  label: ReactNode | string;
  icon?: ReactNode;
}

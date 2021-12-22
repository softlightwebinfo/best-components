import { ReactNode } from "react";
import { IProps } from "../interfaces/IProps";

export interface DashboardProps extends IProps {
  navbar: ReactNode;
  aside: ReactNode;
  paddingBody?: boolean;
}

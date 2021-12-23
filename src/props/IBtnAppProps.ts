import { ReactNode } from "react";
import { IProps } from "../interfaces/IProps";

export interface IBtnAppProps extends IProps {
  label: ReactNode;
  icon: ReactNode;
}

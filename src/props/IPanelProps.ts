import { ReactNode } from "react";
import { IActionIconsProps } from "./IActionIconsProps";

export interface IPanelProps extends IActionIconsProps {
  title: string | ReactNode;
}

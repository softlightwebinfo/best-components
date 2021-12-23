import { ReactNode } from "react";

export interface IFileManager {
  icon?: ReactNode;
  name: string;
  type: string;
  size: string;
}

import { ReactNode } from "react";
import { ICategory } from "../interfaces/ICategory";
import { IFileManager } from "../interfaces/IFileManager";
import { IProps } from "../interfaces/IProps";
import { IDotItemProps } from "./IDotProps";

export interface IFileManagerProps extends IProps {
  files: IFileManager[];
  title: ReactNode | string;
  toolbarRight?: ReactNode;
  empty?: ReactNode;
  tags?: IDotItemProps[];
  categories?: ICategory[];
  initialActive?: string;

  header?(item: IFileManager, index: number): ReactNode;

  body?(item: IFileManager, index: number): ReactNode;

  footer?(item: IFileManager, index: number): ReactNode;

  card?(item: IFileManager, index: number): ReactNode;

  onClick?(item: IFileManager, index: number): any;
}

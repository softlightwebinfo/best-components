import { ReactNode } from "react";
import { IProps } from "../interfaces";
import { TSize } from "../types";

export interface IAvatarProps extends IProps {
  title?: string;
  rounded?: boolean;
  image?: string;
  name?: string | ReactNode;
  alt?: string;
  size?: TSize;
}

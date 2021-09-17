import { IProps } from "../interfaces";
import { TSize } from "../types";

export interface IAvatarProps extends IProps {
  rounded?: boolean;
  image?: string;
  name?: string;
  alt?: string;
  size?: TSize;
}

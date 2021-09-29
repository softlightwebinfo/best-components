import React, { ReactNode } from "react";
import { IProps } from "../interfaces";
import { TPlacement } from "../types";

export interface IDropdownProps extends IProps {
  trigger: ReactNode;
  placement?: TPlacement;
  onClick?: (prv: React.MouseEvent<HTMLSpanElement>, onClick: () => void) => any;
}

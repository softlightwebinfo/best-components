import { IProps } from "../interfaces/IProps";

export interface IActionIconsProps extends IProps {
  isExpanded?: boolean;
  isMinus?: boolean;

  onClickExpand?(): void;

  onClickMinus?(): any;

  onClickSync?(): any;

  onClickTrash?(): any;

  onClickClose?(): any;
}

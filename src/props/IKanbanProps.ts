import { IProps } from "../interfaces/IProps";
import { TPanels } from "../types/TKanban";

export interface IKanbanProps extends IProps {
  panels?: TPanels;
}

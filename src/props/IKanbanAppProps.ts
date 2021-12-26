import { IProps } from "../interfaces/IProps";
import { TPanels, TTeam } from "../types/TKanban";

export interface IKanbanAppProps extends IProps {
  panels: TPanels;
  team: TTeam;
}

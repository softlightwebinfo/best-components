import { IProps } from "../interfaces/IProps";
import { TPanels, TTeam } from "../types/TKanban";

export interface IKanbanAppProviderProps extends IProps {
  panels: TPanels;
  team: TTeam;
}

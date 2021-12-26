import { IProps } from "../interfaces/IProps";
import { TTeam } from "../types/TKanban";

export interface IKanbanTeamProps extends IProps {
  team?: TTeam;
}

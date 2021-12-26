import { TTeam } from "../types/TKanban";

export interface IKanban {
  title: string;
  cards: Record<number, IKanbanCard>;
}

export interface IKanbanCard {
  title: string;
  team?: TTeam;
  number?: number;
  numberTotal?: number;
  date?: string;
  progress?: number;
}

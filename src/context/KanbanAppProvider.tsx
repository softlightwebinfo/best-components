import React, { createContext, useContext, useReducer } from "react";
import { IKanban } from "../interfaces/IKanban";
import { ITeam } from "../interfaces/ITeam";
import { IKanbanAppProviderProps } from "../props/IKanbanAppProviderProps";
import { kanbanAppReducer } from "../reducers/kanbanAppReducer";

export interface IKanbanAppContext {
  panels: Record<number, IKanban>;
  team: Record<number, ITeam>;
}

export const KanbanAppContext = createContext<IKanbanAppContext>({
  team: {},
  panels: {},
});

export const useKanbanContext = () => useContext(KanbanAppContext);

export const KanbanAppProvider = ({ children, panels, team }: IKanbanAppProviderProps) => {
  const initialReducer = {
    panels: panels ?? {},
    team: team ?? {},
  };

  const [state, dispatch] = useReducer(kanbanAppReducer, initialReducer);

  const value = {
    ...state,
    dispatch,
  };

  return (
    <KanbanAppContext.Provider value={ value }>
      { children }
    </KanbanAppContext.Provider>
  );
};

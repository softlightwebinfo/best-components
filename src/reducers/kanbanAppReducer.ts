import { IKanbanAppContext } from "../context/KanbanAppProvider";
import { IAction } from "../interfaces/IAction";

export const kanbanAppReducer = (state: IKanbanAppContext, action: IAction) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

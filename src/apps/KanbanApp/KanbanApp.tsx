import React from "react";
import { BEM } from "../..";
import { Kanban } from "../../components/kanban/Kanban";
import { KanbanTeam } from "../../components/kanban/KanbanTeam";
import { KanbanAppProvider } from "../../context/KanbanAppProvider";
import { IKanbanAppProps } from "../../props/IKanbanAppProps";

export const KanbanApp = (props: IKanbanAppProps) => {
  const cx = new BEM("KanbanApp", {});
  cx.Append(props.className);

  return (
    <KanbanAppProvider team={ props.team } panels={ props.panels }>
      <div className={ cx.toString() } style={ props.style }>
        <KanbanTeam/>
        <Kanban/>
      </div>
    </KanbanAppProvider>
  );
};

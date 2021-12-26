import React from "react";
import { useKanbanContext } from "../../context/KanbanAppProvider";
import { BEM } from "../../functions";
import { IKanbanProps } from "../../props/IKanbanProps";
import { TeamProjectWidget } from "../../widget/TeamProjectWidget/TeamProjectWidget";
import { CardGroup } from "../CardGroup/CardGroup";

export const Kanban = (props: IKanbanProps) => {
  const cx = new BEM("Kanban", {});
  cx.Append(props.className);
  const use = useKanbanContext();
  const panels = use ? use.panels : props.panels;

  return (
    <div className={ cx.toString() } style={ props.style }>
      { Object.entries(panels ?? {}).map(([key, panel]) => (
        <CardGroup
          className={cx.Children("col")}
          key={ key }
          buttonText={ "Add task" }
          actions={ [] }
          title={ panel.title }
        >
          { Object.entries(panel.cards).map(([cardKey, card]) => (
            <TeamProjectWidget
              key={ cardKey }
              date={ card.date }
              numberTotal={ card.numberTotal }
              number={ card.number }
              team={ Object.values(card.team ?? {}) }
              title={ card.title }
              progress={ card.progress }
            />
          )) }
        </CardGroup>
      )) }
    </div>
  );
};

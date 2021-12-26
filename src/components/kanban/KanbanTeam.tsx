import React from "react";
import { Avatar, AvatarStacked, BEM, Toolbar } from "../..";
import { useKanbanContext } from "../../context/KanbanAppProvider";
import { IKanbanTeamProps } from "../../props/IKanbanTeamProps";

export const KanbanTeam = (props: IKanbanTeamProps) => {
  const cx = new BEM("KanbanTeam", {});
  cx.Append(props.className);
  const use = useKanbanContext();

  const team = (use ? use.team : props.team) ?? {};

  return (
    <Toolbar className={ cx.toString() } style={ props.style }>
      <AvatarStacked>
        { Object.values(team).map(item => (
          <Avatar
            key={ item.id }
            name={ item.name }
            image={ item.logo }
          />
        )) }
        <Avatar name={ <i className={ "fa fa-plus" }/> }/>
      </AvatarStacked>
    </Toolbar>
  );
};

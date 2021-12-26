import React from "react";
import { Avatar, AvatarStacked, Group, Title } from "../..";
import Progress from "../../components/Progress";
import { BEM } from "../../functions";
import { ITeamProjectWidgetProps } from "../../props/ITeamProjectWidgetProps";
import { Widget } from "../Widget";

export const TeamProjectWidget = (props: ITeamProjectWidgetProps) => {
  const cx = new BEM("TeamProjectWidget", {});
  cx.Append(props.className);

  return (
    <Widget className={ cx.toString() } style={ props.style }>
      { !!props.progress && <Progress theme={ props.theme } value={ props.progress }/> }
      <Group>
        <Title>{ props.title }</Title>
        { props.titleRight }
      </Group>
      { !!props.team && <AvatarStacked>
        { props.team?.map((item, index) => (
          <Avatar key={ index }{ ...item }/>
        )) }
      </AvatarStacked>
      }
      { ((props.number && props.numberTotal) || props.date) && (
        <Group>
          <div>
            { !!(props.number && props.numberTotal) && (
              <>
                <i className={ "fa fa-list" }/>
                <span>{ props.number }/{ props.numberTotal }</span>
              </>
            ) }
          </div>
          { props.date && <div>{ props.date }</div> }
        </Group>
      ) }
    </Widget>
  );
};

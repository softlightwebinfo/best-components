import React from "react";
import { Avatar, AvatarStacked, Group, TitleSubtitle } from "../../components";
import { GroupToolbar } from "../../components/Group/GroupToolbar";
import Progress from "../../components/Progress";
import { BEM } from "../../functions";
import { ITaskLineCardWidgetProps } from "../../props/ITaskLineCardWidgetProps";
import { Widget } from "../Widget";

export const TaskLineCardWidget = (props: ITaskLineCardWidgetProps) => {
  const cx = new BEM("TaskLineCardWidget", {});
  cx.Append(props.className);

  return (
    <Widget className={ cx.toString() } style={ props.style }>
      <Progress value={ props.progress }/>
      <Group>
        <TitleSubtitle title={ props.title } subTitle={ props.subTitle }/>
        <GroupToolbar>
          <AvatarStacked>
            { props.team?.map((team, index) => (
              <Avatar
                key={ index }
                { ...team }
              />
            )) }
          </AvatarStacked>
          <div className={cx.Children("items")}>
            <i className={ "fa fa-list" }/>
            { props.number }/{ props.numberTotal }
          </div>
          { props.actions }
        </GroupToolbar>
      </Group>
    </Widget>
  );
};

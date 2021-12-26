import { useToggle } from "@codeunic/library-hooks";
import React, { useCallback } from "react";
import { BEM } from "../../functions";
import { IPanelProps } from "../../props/IPanelProps";
import { ActionIcons } from "../Action/ActionIcons";
import { Card, CardBody, CardHeader } from "../Card";
import { Group } from "../Group";
import { Loading } from "../Loading/Loading";
import { Title } from "../Titlte";

export const Panel = (props: IPanelProps) => {
  const [expand, { toggle }] = useToggle();
  const [loading, { toggle: toggleLoading }] = useToggle();
  const [minus, { toggle: toggleMinus }] = useToggle(false);
  const [trash, { toggle: toggleTrash }] = useToggle(false);

  const cx = new BEM("Panel", {
    expand,
  });
  cx.Append(props.className);

  const onClickExpand = useCallback(() => {
    toggle();
    props.onClickExpand?.();
  }, []);

  const onClickSync = useCallback(() => {
    toggleLoading();
    props.onClickSync?.();
  }, []);

  const onClickMinus = useCallback(() => {
    toggleMinus();
    props.onClickMinus?.();
  }, []);

  const onClickTrash = useCallback(() => {
    toggleTrash();
    props.onClickTrash?.();
  }, []);

  if (trash) return null;

  return (
    <Loading show={ loading }>
      <Card className={ cx.toString() } style={ props.style }>
        <CardHeader default>
          <Group>
            <Title>{ props.title }</Title>
          </Group>
          <ActionIcons
            isMinus={ minus }
            isExpanded={ expand }
            onClickMinus={ onClickMinus }
            onClickExpand={ onClickExpand }
            onClickSync={ onClickSync }
            onClickTrash={ onClickTrash }
          />
        </CardHeader>
        { !minus && (
          <CardBody>
            { props.children }
          </CardBody>
        ) }
      </Card>
    </Loading>
  );
};

import React from "react";
import { BEM } from "../../functions";
import { IActionIconsProps } from "../../props/IActionIconsProps";
import { Button } from "../Button";
import { GroupToolbar } from "../Group";

export const ActionIcons = (props: IActionIconsProps) => {
  const cx = new BEM("ActionIcons", {});
  cx.Append(props.className);

  return (
    <GroupToolbar style={ { gap: 10 } }>
      { props.onClickExpand && (
        <Button
          onClick={ props.onClickExpand } default size={ "s" }
          icon={ <i className={ `fa fa-${ props.isExpanded ? "compress" : "expand" }` }/> }
        />
      ) }
      { props.onClickMinus && (
        <Button
          onClick={ props.onClickMinus } default size={ "s" }
          icon={ <i className={ `fa fa-${ props.isMinus ? "plus" : "minus" }` }/> }
        />
      ) }
      { props.onClickSync && (
        <Button onClick={ props.onClickSync } default size={ "s" } icon={ <i className={ "fa fa-sync" }/> }/>
      ) }
      { props.onClickTrash && (
        <Button onClick={ props.onClickTrash } default size={ "s" } icon={ <i className={ "fa fa-trash" }/> }/>
      ) }
      { props.onClickClose && (
        <Button onClick={ props.onClickClose } default size={ "s" } icon={ <i className={ "fa fa-times" }/> }/>
      ) }
    </GroupToolbar>
  );
};

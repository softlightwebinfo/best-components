import React from "react";
import { BEM } from "../../functions";
import { IGridImageItemProps } from "../../props/IGridImageItemProps";


export const GridImageItem = (props: IGridImageItemProps) => {
  const cx = new BEM("GridImageItem", {});
  cx.Append(props.className);
  return (
    <div className={ cx.toString() } style={ props.style }>
      <img
        src={ props.imageLeft }
        alt={props.imageLeftTitle}
        title={props.imageLeftTitle}
      />
      <img
        src={ props.imageRight }
        alt={props.imageRightTitle}
        title={props.imageRightTitle}
      />
    </div>
  );
};

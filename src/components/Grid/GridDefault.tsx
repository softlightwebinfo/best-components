import React from "react";
import { BEM } from "../../functions";
import { IGridDefaultProps } from "../../props/IGridDefaultProps";

export const GridDefault = (props: IGridDefaultProps) => {
  const cx = new BEM("GridDefault", {
    xs: props.xs,
    md: props.md,
    lg: props.lg,
    xl: props.xl,
    col: props.col,
    auto: !!props.auto,
    margin: props.margin,
    autoMinMax: !!(props.autoMin && props.autoMax),
  });

  cx.Append(props.className);
  let style: any = {
    ...props.style,
  };

  if (!!props.auto) {
    style['--grid-default_auto-column'] = `${ props.auto }px`;
  }

  if (props.autoMin) {
    style['--grid-default_auto-column-min'] = `${ props.autoMin }px`;
  }

  if (props.autoMax) {
    style['--grid-default_auto-column-max'] = `${ props.autoMax }px`;
  }

  return (
    <div className={ cx.toString() } style={ style }>
      { props.children }
    </div>
  );
};

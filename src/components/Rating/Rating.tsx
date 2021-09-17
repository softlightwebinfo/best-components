import React, { useCallback, useEffect, useState } from "react";
import { BEM } from "../../functions";
import { IRatingProps } from "../../props/IRatingProps";

export const Rating = ({ stars = 5, ...props }: IRatingProps) => {
  const [select, setSelect] = useState((props.initialSelected ?? -1) - 1);
  const [selectHover, setSelectHover] = useState(-1);

  const cx = new BEM("Rating", {});
  cx.Append(props.className);

  const onClick = useCallback((item) => {
    setSelect(item);
  }, []);

  useEffect(() => {
    props.onChange?.(select + 1);
  }, [select]);

  useEffect(() => {
    setSelect((props?.initialSelected ?? 0) - 1);
  }, [props.initialSelected]);

  return (
    <ul className={ cx.toString() } style={ props.style }>
      { [...new Array(stars)].map((_, key) => {
        return (
          <i
            onMouseEnter={ () => setSelectHover(key) }
            onMouseLeave={ () => setSelectHover(-1) }
            onClick={ () => onClick(key) }
            className={
              cx.Modifier(
                "icon",
                "active",
                selectHover != -1 ? (selectHover >= key) : select >= key,
                "fa fa-star",
              )
            }
            key={ key }
          />
        );
      }) }
    </ul>
  );
};

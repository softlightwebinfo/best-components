import React from "react";
import { BEM } from "../../functions";
import { IWrapperHeaderProps } from "../../props/IWrapperHeaderProps";

export const WrapperHeader = (props: IWrapperHeaderProps) => {
  const cx = new BEM("WrapperHeader", {});
  cx.Append(props.className);
  const style = {
    ...props.style,
    "--wrapper-image": `url(${ props.image })`,
  };
  return (
    <div className={ cx.toString() } style={ style }>
      { props.children }
    </div>
  );
};

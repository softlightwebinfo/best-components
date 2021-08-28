import React from "react";
import { BEM } from "../../functions";
import { IBannerProps } from "../../props/IBannerProps";
import { Alert } from "../Alert";

export const Banner = ({ bannerType = "fixed", ...props }: IBannerProps) => {
  const cx = new BEM("Banner", {
    [bannerType ?? ""]: !!bannerType,
    [props.placement ?? '']: !!props.placement,
  });
  cx.Append(props.className);

  return (
    <Alert
      { ...props }
      className={ cx.toString() }
      style={ props.style }
      isCloseable
    />
  );
};

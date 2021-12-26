import React from "react";
import { BEM } from "../../functions";
import { IAvatarProps } from "../../props";

export const Avatar = (props: IAvatarProps) => {
  const cx = new BEM("Avatar", {
    [props.size ?? '']: !!props.size,
    rounded: props.rounded,
    isName: props.name && !props.image,
  });
  cx.Append(props.className);

  const nameData = () => {
    let name: string | undefined;
    if (typeof props.name == "object") return props.name;

    if (typeof props.name != "string") {
      return "";
    }

    const data: any = props.name?.split(" ");

    if (data.length > 0) {
      name = data.map((item: string) => item[0]).join("");
    } else {
      name = data.slice(0, 2);
    }

    return name;
  };
  return (
    <div className={ cx.toString() } style={ props.style } onClick={ props.onClick }>
      { props.image && (<img src={ props.image } alt={ props.alt } title={ props.title }/>) }
      { (!props.image && props.name) && (<span>{ nameData() }</span>) }
      { props.children }
    </div>
  );
};

import React from "react";
import { createPortal } from "react-dom";

export const Portal = (Component: any) => (props: any) => {
  if (typeof document == "undefined") return null;
  return createPortal(
    <Component { ...props } />,
    // @ts-ignore
    document.body,
  );
};

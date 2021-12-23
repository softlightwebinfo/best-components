import React, { useRef } from "react";
import { createPortal } from "react-dom";
import { DrawerContext } from "../../context/drawerContext";
import { BEM } from "../../functions";
import { useOutside } from "../../hooks/useOutside";
import { IDrawerProps } from "../../props/IDrawerProps";
import { Overlay } from "../Overlay";

export const Drawer = ({ isCloseable = true, open, ...props }: IDrawerProps) => {
  const ref = useRef(null);
  const cx = new BEM("Drawer", {
    open: open,
  });

  cx.Append(props.className);

  const value = {
    open: open,
    onClose: () => {
      if (!isCloseable) return;
      props.onClose?.();
    },
  };

  useOutside(ref, open, () => {
    if (!isCloseable) return;
    value.onClose();
  }, [isCloseable]);

  if (!open) return null;

  return createPortal(
    <DrawerContext.Provider value={ value }>
      <Overlay className={ cx.toString() } style={ props.style }>
        <div ref={ ref } className={ cx.Children("content") }>
          { props.children }
        </div>
      </Overlay>
    </DrawerContext.Provider>,
    document.body,
  );
};

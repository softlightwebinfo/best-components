import { useTimeout } from "@codeunic/library-hooks";
import React, { useEffect, useRef, useState } from "react";
import { DrawerContext } from "../../context/drawerContext";
import { BEM } from "../../functions";
import { useOutside } from "../../hooks/useOutside";
import { IDrawerProps } from "../../props/IDrawerProps";
import { Overlay } from "../Overlay";
import { Portal } from "../Portal/Portal";

export const Drawer = ({ isCloseable = true, ...props }: IDrawerProps) => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(true);
  console.log(props, isCloseable);
  useEffect(() => {
    if (!isCloseable) return;
    console.log(1, props, isCloseable);
    if (props.open) {
      setClose(false);
    }
  }, [props.open]);

  useTimeout(() => {
    if (!isCloseable) return;
    console.log(2, props, isCloseable);
    setOpen(props.open);
  }, 1, props.open);

  useEffect(() => {
    if (!isCloseable) return;
    console.log(3, props, isCloseable);
    if (!open) {
      setTimeout(() => {
        setClose(true);
      }, 300);
    }
  }, [open, isCloseable]);

  const cx = new BEM("Drawer", {
    open: open,
    close: !open,
  });

  cx.Append(props.className);

  const value = {
    open: open,
    onClose: () => {
      if (!isCloseable) return;
      console.log(4, props, isCloseable);
      setOpen(false);
      props.onClose?.();
    },
  };

  useOutside(ref, props.open, () => {
    if (!isCloseable) return;
    console.log(5, props, isCloseable);
    value.onClose();
  });

  if (close) return null;

  return (
    <DrawerContext.Provider value={ value }>
      <Overlay className={ cx.toString() } style={ props.style }>
        <div ref={ ref } className={ cx.Children("content") }>
          { props.children }
        </div>
      </Overlay>
    </DrawerContext.Provider>
  );
};

export default Portal(Drawer);

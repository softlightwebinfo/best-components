import { createContext, useContext } from "react";

export interface IDrawerContext {
  open?: boolean;
  onClose?: () => any;
}

export const DrawerContext = createContext<IDrawerContext>({});
export const useDrawerContext = () => useContext(DrawerContext);

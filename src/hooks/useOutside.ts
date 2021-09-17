import { useEffect } from "react";

export const useOutside = (ref: any, refValue: any, callback: (() => void) | undefined) => {
  useEffect(() => {
    const handleClickOutside = (event: { target: any; }) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback?.();
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, refValue]);
};

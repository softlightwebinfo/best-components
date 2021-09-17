import React, { useCallback, useEffect, useState } from "react";
import { BEM } from "../../functions";
import { IKeypadProps } from "../../props/IKeypadProps";
import { Button } from "../Button";

export const Keypad = ({ keys = "1,2,3,4,5,6,7,8,9,0", keySize = 32, ...props }: IKeypadProps) => {
  const [value, setValue] = useState("");

  const cx = new BEM("Keypad", {});
  cx.Append(props.className);

  const style = {
    ...props.style,
    '--keypad-button-size': `${ keySize }px`,
  };

  const onClickItem = useCallback((item) => {
    setValue(prv => prv + item);
  }, [keys]);

  const onClickBack = useCallback(() => {
    setValue(prv => prv.slice(0, -1));
  }, [value]);

  const onClickDelete = useCallback(() => {
    setValue("");
  }, []);

  useEffect(() => {
    props.onChange?.(value);
  }, [value]);

  return (
    <div className={ cx.toString() } style={ style }>
      { keys?.split(",").map(item => {
        return (
          <Button
            onClick={ () => onClickItem(item) }
            className={ cx.Children("button") }
            key={ item }
          >
            { item }
          </Button>
        );
      }) }
      <Button
        onClick={ onClickBack }
        className={ cx.Children("button") }
      >
        <i className={ "fa fa-arrow-left" }/>
      </Button>
      <Button
        onClick={ onClickDelete }
        className={ cx.Children("button") }
      >
        <i className={ "fa fa-times" }/>
      </Button>
    </div>
  );
};

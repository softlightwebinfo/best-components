import React, { useState } from "react";
import { BEM } from "../../functions";
import { ITimePickerProps } from "../../props/ITimePickerProps";
import { Button } from "../Button";
import { TimePickerItem } from "./TimePickerItem";

export const TimePicker = (props: ITimePickerProps) => {
  const [state, setState] = useState<any>({});
  const cx = new BEM("TimePicker", {});
  cx.Append(props.className);

  const onClick = (index: number, number: number) => {
    setState((prv: any) => {
      const data = ({ ...prv, [number]: index });
      return data;
    });
  };
  console.log(state);
  return (
    <div className={ cx.toString() } style={ props.style }>
      <section className={ cx.Children("content") }>
        <div className={ cx.Children("item") }>
          { [...new Array(24)].map((value, index) => (
            <TimePickerItem
              label={ index }
              key={ index }
              activeLabel={ state?.[0] }
              onClick={ () => onClick(index, 0) }
            />
          )) }
        </div>
        <div className={ cx.Children("item") }>
          { [...new Array(60)].map((value, index) => (
            <TimePickerItem
              label={ index }
              key={ index }
              activeLabel={ state?.[1] }
              onClick={ () => onClick(index, 1) }
            />
          )) }
        </div>
        <div className={ cx.Children("item") }>
          { [...new Array(60)].map((value, index) => (
            <TimePickerItem
              label={ index }
              key={ index }
              activeLabel={ state?.[2] }
              onClick={ () => onClick(index, 2) }
            />
          )) }
        </div>
      </section>
      <footer className={ cx.Children("footer ") }>
        <Button default>Now</Button>
        <Button>ok</Button>
      </footer>
    </div>
  );
};

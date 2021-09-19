import React from "react";
import { BEM } from "../../functions";
import { ITimePickerProps } from "../../props/ITimePickerProps";
import { Button } from "../Button";

export const TimePicker = (props: ITimePickerProps) => {
  const cx = new BEM("TimePicker", {});
  cx.Append(props.className);
  return (
    <div className={ cx.toString() } style={ props.style }>
      <section className={ cx.Children("content") }>
        <div>
          { [...new Array(23)].map((value, index) => (
            <div>{ index }</div>
          )) }
        </div>
        <div>
          { [...new Array(59)].map((value, index) => (
            <div>{ index }</div>
          )) }
        </div>
        <div>
          { [...new Array(59)].map((value, index) => (
            <div>{ index }</div>
          )) }
        </div>
      </section>
      <footer className={ cx.Children("footer ") }>
        <Button>Now</Button>
        <Button>ok</Button>
      </footer>
    </div>
  );
};

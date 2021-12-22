import React from "react";
import { BEM } from "../../functions";
import { DashboardProps } from "../../props/DashboardProps";
import { Navbar } from "../Navbar";

export const Dashboard = (props: DashboardProps) => {
  const cx = new BEM("Dashboard", {
    paddingBody: props.paddingBody,
  });
  cx.Append(props.className);

  return (
    <div className={ cx.toString() } style={ props.style }>
      <Navbar className={ cx.Children("navbar") }>{ props.navbar }</Navbar>
      <aside className={ cx.Children("aside") }>{ props.aside }</aside>
      <section className={ cx.Children("main") }>{ props.children }</section>
    </div>
  );
};

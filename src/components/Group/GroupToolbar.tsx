import { BEM } from "../../functions";

export const GroupToolbar = (props: IGroupToolbarProps) => {
  const cx = new BEM("GroupToolbar", {});
  cx.Append(props.className);
};

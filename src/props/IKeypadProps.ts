import { IProps } from "../interfaces";

export interface IKeypadProps extends IProps {
  onChange?: (value: string) => any;
  keySize?: number;
  keys?: string;
  shuffle?: boolean;
  shuffleCount?: boolean;
}

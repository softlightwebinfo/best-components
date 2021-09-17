import { TPlacement } from "../types";
import { TBannerType } from "../types/TBannerType";
import { IAlertProps } from "./IAlertProps";

export interface IBannerProps extends IAlertProps {
  placement?: TPlacement;
  bannerType?: TBannerType;
}

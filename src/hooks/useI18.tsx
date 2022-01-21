import { useContext } from "react";
import { I18Context } from "../context/i18Context";

export const useI18 = () => useContext(I18Context);

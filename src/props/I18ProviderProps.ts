import { IProps } from "../interfaces";

export interface I18ProviderProps extends IProps {
  translates: Record<TLanguage, Record<string, string>>;
  lang: string;
}

export type TLanguage = "es" | "en" | string;

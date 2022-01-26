import React, { createContext, useState } from "react";
import { I18ProviderProps, TLanguage } from "../props/I18ProviderProps";
import { i18Translates } from "../translates/i18Translates";

export interface I18ContextState {
  state?: {
    lang: string;
    translates?: Record<TLanguage, Record<string, string>>;
  };

  get(key: string, defaultValue?: string): string;
}

export const I18Context = createContext<I18ContextState>({
  state: {
    lang: "en",
    translates: i18Translates,
  },
  get(key: string, defaultValue?: string): string {
    const lang = "en";
    return i18Translates?.[lang]?.[key] ?? defaultValue ?? i18Translates?.[lang]?.[key];
  },
});

const initialize = (translates: Record<TLanguage, Record<string, string>>) => {
  let data = {
    ...i18Translates,
  };

  Object.entries(translates ?? {}).forEach(([lang, value]) => {
    data[lang] = {
      ...data[lang],
      ...value,
    };
  });

  return data;
};

export const I18Provider = (props: I18ProviderProps) => {
  const [state, setState] = useState({
    lang: props.lang ?? "es",
    translates: initialize(props.translates),
  });

  const value: I18ContextState = {
    state,
    get(key: string, defaultValue?: string) {
      return state.translates?.[state.lang]?.[key] ?? defaultValue ?? state.translates?.["en"]?.[key];
    },
  };

  return (
    <I18Context.Provider value={ value }>
      { props.children }
    </I18Context.Provider>
  );
};

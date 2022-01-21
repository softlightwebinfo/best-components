import { TLanguage } from "../props/I18ProviderProps";

export const i18Translates: Record<TLanguage, Record<string, string>> = {
  es: {
    chatContactTitle: "Contacta con nosotros",
    chatContactDescription: `¡Hola! Es realmente genial verte aquí. 
    Cuéntanos algunos detalles sobre ti y estamos listos para comenzar.`,
    mute: "Silenciar",
    chatContactButton: "Empezar Chat",
    writeMessage: "Escribe tu mensaje",
  },
  en: {
    chatContactTitle: "Contact us",
    mute: "Mute",
    chatContactDescription: `Hello! It's really great to see you here.
Tell us just a few details about you and we are ready to start.`,
    chatContactButton: "Start Chat",
    writeMessage: "Write your message",
  },
};

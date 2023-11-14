import "@/styles/globals.css";
import "@/i18n";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Provider } from "react-redux";
import { store } from "@/store";

export default function App({ Component, pageProps }: AppProps) {
  const { i18n } = useTranslation();
  useEffect(() => {
    const savedLanguage = localStorage.getItem("lang") || "fa";
    !savedLanguage && localStorage.setItem("lang", "fa");
    i18n.changeLanguage(savedLanguage);
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
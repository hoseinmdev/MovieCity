import "@/styles/globals.css";
import "@/i18n";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function App({ Component, pageProps }: AppProps) {
  const { i18n } = useTranslation();
  useEffect(() => {
    const savedLanguage = localStorage.getItem("lang") || "fa";
    i18n.changeLanguage(savedLanguage);
    document.cookie = `lang=${savedLanguage}; path=/; max-age=31536000; SameSite=Lax`;
  }, []);

  return <Component {...pageProps} />;
}

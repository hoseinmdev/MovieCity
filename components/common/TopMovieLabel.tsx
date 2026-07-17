import React from "react";
import { useTranslation } from "react-i18next";

const TopMovieLabel: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="glow-gold rounded-md border border-gold/60 bg-gold/10 px-3 py-1 text-center text-base text-gold backdrop-blur-sm">
      {t("topMovie")}
    </div>
  );
};
export default TopMovieLabel;

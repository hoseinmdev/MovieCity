import React from "react";
import { useTranslation } from "react-i18next";

const TopMovieLabel: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="rounded-md border border-gold px-3 py-1 text-center text-base text-gold">
      {t("topMovie")}
    </div>
  );
};
export default TopMovieLabel;

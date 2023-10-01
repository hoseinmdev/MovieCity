import React from "react";
import { useTranslation } from "react-i18next";

const TopMovieLabel: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="rounded-md border border-yellow-500 px-3 py-1 text-center text-base text-yellow-500">
      {t("topMovie")}
    </div>
  );
};
export default TopMovieLabel;

import React from "react";
import { useTranslation } from "react-i18next";

interface DownloadBoxProps {
  quality: number;
  size: number;
  link: string;
}

const DownloadBox: React.FC<DownloadBoxProps> = ({ size, link, quality }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex w-full items-center justify-between rounded-lg bg-neutral-800 p-2 text-sm text-white/80 lg:p-4 lg:text-base">
      <div className=" flex h-full flex-col justify-center gap-4 lg:gap-2">
        <p>{t("quality") + " : " + quality + "p"}</p>
        <p>
          {t("size") +
            " : " +
            `${
              size < 1000
                ? size
                : `${
                    size.toString().slice(0, 1) +
                    "," +
                    size.toString().slice(1, 2)
                  }`
            }` +
            " " +
            `${size < 1000 ? t("mb") : t("gb")}`}
        </p>
      </div>
      <div className="flex flex-col items-end gap-2 lg:flex-row ">
        <a
          href={link}
          className="flex h-full w-40 justify-center rounded-lg bg-indigo-500 p-2 lg:p-3"
        >
          {t("download") + " " + t("quality") + " " + quality}
        </a>
        <div className="flex h-full w-40 justify-center rounded-lg bg-yellow-500 p-2 lg:p-3">
          {t("onlineWatch")}
        </div>
      </div>
    </div>
  );
};
export default DownloadBox;

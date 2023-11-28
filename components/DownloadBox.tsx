import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "./common/Modal";
import { IoMdClose } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdOutlineVerifiedUser } from "react-icons/md";
import Image from "next/image";

interface DownloadBoxProps {
  movieId: string;
  quality: number;
  size: number;
  link: string;
}

const DownloadBox: React.FC<DownloadBoxProps> = ({
  size,
  link,
  quality,
  movieId,
}) => {
  const { t, i18n } = useTranslation();
  const [isLogin, setIsLogin] = useState(false);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token") || "";
    if (token) setIsLogin(true);
  }, []);
  const isLoginHandler = () => {
    if (!isLogin) setShowModal(true)
  }
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
          href={isLogin ? link : undefined}
          onClick={isLoginHandler}
          className="flex h-full w-40 justify-center rounded-lg bg-indigo-500 p-2 lg:p-3"
        >
          {t("download") + " " + t("quality") + " " + quality}
        </a>
      </div>
      {showModal && (
        <Modal>
          <div className="flex h-full w-full flex-col items-center justify-start gap-6 p-4 text-white">
            <div
              onClick={() => setShowModal(false)}
              className="self-start text-2xl text-red-500"
            >
              <IoMdClose />
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-lg">{t("dearUser") + " 👑"}</p>
              <p className="whitespace-nowrap">{t("forDownloadMovie")}</p>
              <p className="">{t("note")}</p>
            </div>
            <div className="mt-8 flex w-full flex-col items-center justify-between gap-2">
              <Link href={"/signup"} className="flex w-full  items-center justify-center gap-2 rounded-lg bg-red-600 p-2">
                {t("signUp")}
                <div className="text-lg text-white">
                  <MdOutlineVerifiedUser />
                </div>
              </Link>
              <button
                onClick={() => setShowModal(false)}
                className="flex w-full  items-center justify-center gap-2 rounded-lg border border-red-500 bg-none p-2"
              >
                {t("later")}
                <div className="text-lg text-white">
                  <IoMdClose />
                </div>
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
export default DownloadBox;

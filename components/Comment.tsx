import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

interface CommentProps {
  sender: string;
  text: string;
}

const Comment: React.FC<CommentProps> = ({ sender, text }) => {
  const { t, i18n } = useTranslation();
  return (
    <div
      className={`flex w-full flex-col items-start justify-start gap-2 p-3 ${
        i18n.dir() === "rtl" ? "rounded-l-full" : "rounded-r-full"
      }  bg-neutral-800/80 p-2 text-white/80`}
    >
      <div className="flex items-center justify-center gap-2">
        <div className="rounded-full border-2 border-primary p-2">
          <FaUserAlt />
        </div>
        <p className="text-white/60 ">{t("aCommentFrom") + sender}</p>
      </div>
      <p>{text}</p>
    </div>
  );
};
export default Comment;

import { t } from "i18next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";

const SignupButton: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token") || "";
    if (token) setIsLogin(true);
  }, []);
  return (
    <div
      className={`${
        isLogin ? "hidden" : ""
      } flex w-1/2 items-center justify-end gap-3`}
    >
      <Link
        href={"signup"}
        className="flex items-center gap-2 rounded-lg bg-red-600 px-2 py-1 text-white lg:py-2 lg:px-6"
      >
        <p className="lg:cursor-pointer">{t("signUp")}</p>
        <span>
          <FaUser />
        </span>
      </Link>
    </div>
  );
};
export default SignupButton;

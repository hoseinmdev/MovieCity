import { t } from "i18next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import Button from "./common/Button";

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
      } flex w-auto whitespace-nowrap items-center justify-end gap-3`}
    >
      <Link
        href={"signup"}
      >
        <Button
          type="primary"
          className="flex items-center justify-center gap-2 !px-3"
        >
          <p className="lg:cursor-pointer">{t("signUp")}</p>
          <span>
            <FaUser />
          </span>
        </Button>
      </Link>
    </div>
  );
};
export default SignupButton;

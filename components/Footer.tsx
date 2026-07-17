import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FaTelegram, FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiDevdotto } from "react-icons/si";

const SOCIALS = [
  { icon: <FaTelegram />, href: "https://t.me/tinowtinow" },
  { icon: <FaGithub />, href: "https://github.com/hoseinmdev" },
  { icon: <MdEmail />, href: "mailto:hoseinmdev@gmail.com" },
  { icon: <SiDevdotto />, href: "https://dev.to/hoseinmdev" },
];

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="glass mt-10 w-full border-x-0 border-b-0 px-6 py-10">
      <div className="container mx-auto flex w-full flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col items-center gap-2 text-center lg:items-start lg:text-left">
          <p className="font-EstedadFont text-2xl italic text-primary drop-shadow-[0_0_12px_rgba(124,58,237,0.5)]">
            Movie City
          </p>
          <p className="max-w-sm text-sm text-white/50">{t("material")}</p>
        </div>

        <div className="flex flex-col items-center gap-3 lg:items-start">
          <Link
            href="/"
            className="text-white/60 transition-colors hover:text-primary"
          >
            {t("mainPage")}
          </Link>
          <Link
            href="/home"
            className="text-white/60 transition-colors hover:text-primary"
          >
            {t("home")}
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {SOCIALS.map((s, i) => (
            <a
              key={i}
              href={s.href}
              {...(!s.href.startsWith("mailto:") && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              className="glass glass-hover flex h-10 w-10 items-center justify-center rounded-full text-xl text-white/70 transition-all hover:text-primary"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;

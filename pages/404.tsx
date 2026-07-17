import Link from "next/link";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="glass-strong mx-auto flex min-h-[50vh] w-[92%] max-w-xl flex-col items-center justify-center gap-6 rounded-2xl p-10 text-white lg:w-full">
        <p className="glow-primary-sm text-8xl font-bold text-primary">404</p>
        <p className="font-EstedadFont text-2xl">{t("pageNotFound") || "Page Not Found"}</p>
        <p className="text-white/50">{t("pageNotFoundDesc") || "The page you are looking for does not exist."}</p>
        <Link
          href="/"
          className="glow-primary-sm rounded-xl bg-primary px-6 py-3 font-EstedadFont text-white transition-all duration-300 hover:bg-primaryHover"
        >
          {t("backToHome") || "Back to Home"}
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

import Link from "next/link";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 text-white">
        <p className="text-8xl font-bold text-primary">404</p>
        <p className="font-EstedadFont text-2xl">{t("pageNotFound") || "Page Not Found"}</p>
        <p className="text-white/50">{t("pageNotFoundDesc") || "The page you are looking for does not exist."}</p>
        <Link
          href="/"
          className="rounded-xl bg-primary px-6 py-3 font-EstedadFont text-white transition-colors hover:bg-primaryHover"
        >
          {t("backToHome") || "Back to Home"}
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

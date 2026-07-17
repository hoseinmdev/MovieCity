import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import i18n from "@/i18n";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen font-VazirFont bg-background overflow-x-hidden" dir={i18n.dir()}>
      <Head>
        <title>Movie City</title>
      </Head>

      {/* Ambient background orbs */}
      <div className="ambient-orb-1" />
      <div className="ambient-orb-2" />
      <div className="ambient-orb-3" />

      <div className="relative z-10">
        <Header />
        <div className="fadeShow">{children}</div>
        <Footer />
      </div>
    </div>
  );
};
export default Layout;

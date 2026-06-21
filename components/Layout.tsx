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
    <div className="font-VazirFont bg-background" dir={i18n.dir()}>
      <Head>
        <title>Movie City</title>
      </Head>
      <Header />
      <div className="fadeShow bg-background">{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;

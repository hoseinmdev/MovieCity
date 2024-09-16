import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import i18n from "@/i18n";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="font-VazirFont bg-background" dir={i18n.dir()}>
      <Header />
      <div className="fadeShow bg-background">{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;

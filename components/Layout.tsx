import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import i18n from "@/i18n";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-stone-900" dir={i18n.dir()}>
      <Header />
      <div className="fadeShow container ml-auto mr-auto bg-stone-900 p-2">
        {children}
      </div>
      <Footer />
    </div>
  );
};
export default Layout;

import React from "react";
import Footer from "./Footer";
import Header from "./Header";

type LayoutType = {
  children: React.ReactNode;
  mainBgColor: string | null;
};
const Layout = ({ children, mainBgColor = "" }: LayoutType) => {
  return (
    <div className="relative">
      <Header />
      <main className={`px-7 lg:px-16 py-8 lg:py-10 min-h-screen ${mainBgColor}`}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

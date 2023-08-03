import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LayoutProps } from "@/types/layout";
import { FC } from "react";

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

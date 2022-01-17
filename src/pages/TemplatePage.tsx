import React from "react";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";

interface Props {
  children: React.ReactNode;
}

export const TemplatePage: React.FC<Props> = ({ children }): JSX.Element => {
  return (
    <>
      <Nav></Nav>
      {children}
      <Footer></Footer>
    </>
  );
};

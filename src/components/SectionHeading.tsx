import React, { Children } from "react";

interface Props {
  subText: string;
  mainText: string;
}

export const SectionHeading: React.FC<Props> = ({
  mainText,
  subText,
  children,
}) => {
  return (
    <section className="features-sect" style={{ backgroundColor: "#3A3B3D" }}>
      <div
        className="sect-heading"
        style={{ color: "#61892F", marginBottom: "4rem" }}
      >
        {subText}
        <br />
        <span>{mainText}</span>
      </div>
      {children}
    </section>
  );
};

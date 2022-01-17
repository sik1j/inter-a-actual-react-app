import React from "react";
import { SectionHeading } from "../components/SectionHeading";
import { TemplatePage } from "./TemplatePage";

export const Apply = () => {
  const paragraph = {
    marginBottom: "3rem",
  };
  return (
    <TemplatePage>
      <SectionHeading mainText="Apply" subText="how to">
        <div className="card-text" style={{ padding: "0 15vw" }}>
          <div style={paragraph}>
            <div className="heading">
              No 1. (IDK what's supposed to be here)
            </div>
            <div className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, laboriosam optio expedita molestias, hic modi quibusdam
              consequuntur facere ducimus ut, ratione delectus adipisci. Aut,
              voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Hic, facere! Dolores quaerat consequatur fuga voluptate ad
              porro ducimus quod tempora molestiae. Qui, illo quia, dolorum rem
              ratione maxime facilis id dicta quidem labore, sed autem cumque
              enim omnis! Provident recusandae consectetur error at eum
              excepturi ullam, ut blanditiis eos velit?
            </div>
          </div>
          <div style={{ ...paragraph, marginBottom: 0 }}>
            <div className="heading">No 2.</div>
            <div className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, laboriosam optio expedita molestias, hic modi quibusdam
              consequuntur facere ducimus ut, ratione delectus adipisci. Aut,
              voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Hic, facere! Dolores quaerat consequatur fuga voluptate ad
              porro ducimus quod tempora molestiae. Qui, illo quia, dolorum rem
              ratione maxime facilis id dicta quidem labore, sed autem cumque
              enim omnis! Provident recusandae consectetur error at eum
              excepturi ullam, ut blanditiis eos velit?
            </div>
          </div>
        </div>
      </SectionHeading>
    </TemplatePage>
  );
};

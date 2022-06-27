import React, { ReactElement } from "react";

const Who = (): ReactElement => {
  return (
    <div
      className={
        "flex md:flex-row w-full md:items-start flex-col items-center justify-center"
      }
    >
      <img
        src={"/images/me.jpg"}
        className={"w-[250px] h-[250px] md:mr-10 rounded-md"}
        alt={"Me"}
      />

      <div className={"w-full md:mt-0 mt-12"}>
        <p>
          4x years old senior developer who resides in Istanbul, Turkey. Started
          with a Commodore 64 when I was kid, I quickly became passionated about
          programming and excited about building something on my own at a very
          early age. Through the years, my ambition grew, I learned many
          programming languages and practiced myself in many disciplines of this
          area, leveraging a wide variety of development techniques and
          paradigms. You can find a list of my expertise in Skills section.
        </p>
        <p>
          I nearly have 2 decades of professional work history, being an IT
          member of companies like Turkish Airlines, Oracle and Efes Pilsen.
          I&apos;m currently working in my own company, Clockwork Agency, which
          is a Istanbul based tech company focused on delivering web and mobile
          services.
        </p>
        <p>
          Aside being a developer, I&apos;m also an avid technologist,
          particularly interested in electronics and mechanics. I enjoyed
          experimenting some projects in IoT field, though not being
          professional, just to enlarge my vision and knowledge.
        </p>
      </div>
    </div>
  );
};

export default Who;

import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Logo from "@components/Logo";
import Who from "@components/sections/Who";
import Works from "@components/sections/Works";
import Skills from "@components/sections/Skills";
import Contact from "@components/sections/Contact";

import { Element, scroller } from "react-scroll";
import { useRouter } from "next/router";
import Head from "next/head";

const sections = [
  {
    menuText: "Who am I?",
    link: "/",
    headerTitle: "I AM",
    component: <Who />,
    key: "who",
  },
  {
    menuText: "Works",
    link: "/works",
    headerTitle: "I DID",
    component: <Works />,
    key: "works",
  },
  {
    menuText: "Skills",
    link: "/skills",
    headerTitle: "I KNOW",
    component: <Skills />,
    key: "skills",
  },
  {
    menuText: "Contact",
    link: "/contact",
    headerTitle: "I'M ON",
    component: <Contact />,
    key: "contact",
  },
];

const pseudoStyles =
  "before:content-[attr(data-pseudo)] after:content-[attr(data-pseudo)] before:animate-noise3sec after:animate-noise2sec before:[clip:rect(0,900px,0,0)] after:[clip:rect(0,900px,0,0)] before:absolute before:left-[-2px] before:[text-shadow:1px_1px_blue] before:overflow-hidden after:absolute after:left-[-2px] after:[text-shadow:-1px_-1px_red] after:overflow-hidden";

const Home: NextPage = () => {
  const router = useRouter();
  const [currentRoute, setCurrentRoute] = useState("/");

  const goToSection = (link: string) => () => {
    router.push(link, link, {
      shallow: true,
    });
  };

  useEffect(() => {
    if (router) {
      scroller.scrollTo(router.asPath, {
        smooth: "easeOutQuint",
        containerId: "container",
      });
      setCurrentRoute(router.asPath);
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>Burak Erdem</title>
      </Head>
      <div
        className={
          "w-full h-screen bg-black flex flex-row font-body text-gray-400 text-base"
        }
      >
        <div className={"w-[300px] flex flex-col p-8"}>
          <Logo />

          {router && router.asPath.length > 0 && (
            <div className={"ml-6 mt-8"}>
              {sections.map((item) => (
                <div
                  key={item.key}
                  onClick={goToSection(item.link)}
                  data-pseudo={item.menuText}
                  className={`cursor-pointer font-sans font-bold relative my-8 text-3xl ${
                    currentRoute === item.link ? pseudoStyles : ""
                  }`}
                >
                  {item.menuText}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className={"w-full h-full overflow-hidden px-10"} id={"container"}>
          {sections.map((section) => (
            <Element name={section.link} key={`section-${section.key}`}>
              <div className={"pt-10 w-full h-screen overflow-hidden"}>
                <h2 className={"text-5xl font-sans mb-8"}>
                  {section.headerTitle}
                </h2>
                {section.component}
              </div>
            </Element>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

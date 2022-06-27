import type { NextPage } from "next";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Logo from "@components/Logo";
import Who from "@components/sections/Who";
import Works from "@components/sections/Works";
import Skills from "@components/sections/Skills";
import Contact from "@components/sections/Contact";

import { Element, scroller } from "react-scroll";

import useScrollInfo from "@bongione/react-element-scroll-hook";

import { useRouter } from "next/router";
import Head from "next/head";
import { FiMenu, FiXCircle } from "react-icons/fi";
import { MdClose } from "react-icons/md";

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
  const [menuOpen, setMenuOpen] = useState(false);

  const goToSection = (link: string) => () => {
    setMenuOpen(false);
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

  // @ts-ignore
  return (
    <>
      <Head>
        <title>Burak Erdem</title>
      </Head>
      <div
        className={
          "w-full md:h-screen h-full bg-black flex md:flex-row flex-col font-body text-gray-400 text-base"
        }
      >
        <header className="md:hidden flex flex-row justify-between px-6 items-center h-24 w-full bg-black fixed">
          <Logo />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={"outline-none"}
          >
            {menuOpen ? (
              <MdClose color={"white"} size={32} />
            ) : (
              <FiMenu color={"white"} size={32} />
            )}
          </button>
        </header>

        <div
          className={`md:w-[300px] w-3/4 flex flex-col p-8 md:bg-black bg-black/90 h-screen md:static absolute z-[1000] transition-transform duration-500 md:translate-x-0 ${
            menuOpen ? "-translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className={"hidden md:block"}>
            <Logo />
          </div>

          {router && router.asPath.length > 0 && (
            <div className={"ml-6 mt-8"}>
              {sections.map((item) => (
                <div
                  key={item.key}
                  onClick={goToSection(item.link)}
                  data-pseudo={item.menuText}
                  className={`cursor-pointer font-sans font-bold relative my-8 text-3xl select-none ${
                    currentRoute === item.link ? pseudoStyles : ""
                  }`}
                >
                  {item.menuText}
                </div>
              ))}
            </div>
          )}
        </div>
        <div
          className={
            "w-full h-screen md:overflow-hidden px-10 overflow-x-hidden overflow-y-auto md:mt-0 mt-24"
          }
          id={"container"}
        >
          {sections.map((section) => (
            <Element name={section.link} key={`section-${section.key}`}>
              <div
                className={
                  "md:py-10 py-6 w-full md:h-screen h-full overflow-hidden"
                }
              >
                <h2
                  className={
                    "text-5xl font-sans mb-8 w-full text-center md:text-left"
                  }
                >
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

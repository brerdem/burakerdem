import React, { ReactElement, useCallback } from "react";
import SkillItem from "@components/SkillItem";
import styles from "../../../styles/Skills.module.css";
import {
  DiAndroid,
  DiAngularSimple,
  DiDotnet,
  DiJavascript1,
  DiMongodb,
  DiMysql,
  DiNodejs,
  DiNodejsSmall,
  DiPhotoshop,
  DiPhp,
  DiReact,
  DiSwift,
} from "react-icons/di";
import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAndroid,
  SiAngularjs,
  SiArduino,
  SiBlender,
  SiDotnet,
  SiFigma,
  SiFlutter,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiReact,
  SiSwift,
  SiTypescript,
  SiUnity,
} from "react-icons/si";

const skillSet = [
  {
    category: "WEB",
    skills: [
      {
        name: "JavaScript",
        percentage: 90,
        icon: <SiJavascript size={30} />,
        color: "#F7DF39",
      },
      {
        name: "React",
        percentage: 90,
        icon: <SiReact size={32} />,
        color: "#59C3E0",
      },
      {
        name: "Angular",
        percentage: 75,
        icon: <SiAngularjs size={30} />,
        color: "#DE3E1F",
      },
      {
        name: "TypeScript",
        percentage: 75,
        icon: <SiTypescript size={30} />,
        color: "#3178C6",
      },
    ],
  },
  {
    category: "MOBILE",
    skills: [
      {
        name: "React Native",
        percentage: 95,
        icon: <SiReact size={32} />,
        color: "#7752BC",
        text: "native",
      },
      {
        name: "Android",
        percentage: 80,
        icon: <SiAndroid size={35} />,
        color: "#3DDC84",
      },
      {
        name: "Swift",
        percentage: 60,
        icon: <SiSwift size={30} />,
        color: "#F57931",
      },
      {
        name: "Flutter",
        percentage: 70,
        icon: <SiFlutter size={30} />,
        color: "#40A0EE",
      },
    ],
  },
  {
    category: "SERVER",
    skills: [
      {
        name: "NodeJS",
        percentage: 95,
        icon: <SiNodedotjs size={30} />,
        color: "#68A063",
      },
      {
        name: "PHP",
        percentage: 75,
        icon: <SiPhp size={35} />,
        color: "#878DB8",
      },
      {
        name: ".NET",
        percentage: 70,
        icon: <SiDotnet size={35} />,
        color: "#147CC2",
      },
      {
        name: "Mongo DB",
        percentage: 75,
        icon: <SiMongodb size={30} />,
        color: "#489737",
      },
      {
        name: "MySQL",
        percentage: 80,
        icon: <SiMysql size={35} />,
        color: "#025E88",
      },
    ],
  },
  {
    category: "DESIGN",
    skills: [
      {
        name: "Photoshop",
        percentage: 90,
        icon: <SiAdobephotoshop size={30} />,
        color: "#27B6ED",
      },
      {
        name: "After Effects",
        percentage: 80,
        icon: <SiAdobeaftereffects size={30} />,
        color: "#878DB8",
      },
      {
        name: "Illustrator",
        percentage: 70,
        icon: <SiAdobeillustrator size={30} />,
        color: "#F6962D",
      },
      {
        name: "Figma",
        percentage: 75,
        icon: <SiFigma size={30} />,
        color: "#9F6EF7",
      },
    ],
  },
  {
    category: "OTHER",
    skills: [
      {
        name: "Unity",
        percentage: 75,
        icon: <SiUnity size={30} />,
        color: "#989898",
      },
      {
        name: "Blender",
        percentage: 70,
        icon: <SiBlender size={30} />,
        color: "#EE8535",
      },
      {
        name: "Arduino",
        percentage: 80,
        icon: <SiArduino size={30} />,
        color: "#339297",
      },
      {
        name: "Python",
        percentage: 80,
        icon: <SiPython size={30} />,
        color: "#FFD140",
      },
    ],
  },
];

const Skills = (): ReactElement => {
  return (
    <>
      <div className={`${styles.scrollContent} md:block hidden`}>
        <div className={"w-full mb-24"}>
          {skillSet.map((cat) => (
            <div className={"flex flex-row flex-wrap h-64"} key={cat.category}>
              <div
                className={
                  "text-2xl font-sans rounded-lg tracking-wider font-thin text-slate-300 [writing-mode:vertical-lr] [text-orientation:upright] flex text-center justify-center items-center bg-gray-800 h-60 w-10"
                }
              >
                {cat.category}
              </div>
              {cat.skills.map((item) => (
                <div className={"m-6"} key={item.name}>
                  <SkillItem item={item} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="md:hidden">
        {skillSet.map((cat) => (
          <div className={"flex flex-col"} key={cat.category}>
            <h4 className="text-2xl font-sans rounded-lg tracking-widest font-thin text-slate-300 bg-gray-800 h-10 flex text-center justify-center items-center">
              {cat.category}
            </h4>

            <div
              className={
                "my-12 overflow-x-scroll w-full flex flex-wrap snap-mandatory snap-x no-scrollbar"
              }
            >
              <div className={"flex flex-row space-x-12"}>
                {cat.skills.map((item) => (
                  <div key={item.name}>
                    <SkillItem item={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;

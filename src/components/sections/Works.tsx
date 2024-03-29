import React, { ReactElement } from "react";
import WorkItem from "@components/WorkItem";
import styles from "../../../styles/Skills.module.css";

const items = [
  {
    key: "efes",
    title: ["Casual Games", "Micro Site"],
    desc: "Worked for Efes almost 10 years. Made several micro games, landing pages, event websites and a wide range of banners and advertorials.",
  },
  {
    key: "mcd",
    title: ["Website", "Mobile Apps", "Social Games", "Custom Software"],
    desc: "Provided versatile services for McDonald's for 11 years. This includes mobile apps, online puzzle games, delivery website and other different apps such as desktop applications.",
  },
  {
    key: "pizzahut",
    title: ["Mobile Apps", "Push Messaging Platform"],
    desc: "Involved in mobile projects and developed an omni-channel messaging platform for Pizza Hut Turkey.",
  },
  {
    key: "mapfre",
    title: "Chatbot",
    desc: "Designed and built a bot application over Facebook Messaging Platform which users able to request insurance quotas from different issuers",
  },

  {
    key: "kia",
    title: ["Micro Site", "Website"],
    desc: "Created corporate website and localized many advertorial micro sites. I have also developed an interactive custom make/model web application.",
  },
  {
    key: "redbull",
    title: ["Micro Site", "Advertorials"],
    desc: "Designed an interactive micro site for a Turkish Moto GP star. Users were able to design their own 3D helmets for a contest.",
  },
  {
    key: "thy",
    title: ["HR Web App", "IT Side Projects"],
    desc: "I have worked for 4 years at Istanbul Airport and developed custom planner for personnel vacation and day-offs",
  },
  {
    key: "greenpeace",
    title: "Micro Site",
    desc: "Built a website where users can create their own unique character and make a human chain for global causes they can choose. Won couple of international awards",
  },
  {
    key: "asus",
    title: "Micro Site",
    desc: "ASUS Repıblic of Gamers' promotional micro site. It had a custom CMS allowing to serve content for 20 different countries and 10 languages",
  },
];

const Works = (): ReactElement => {
  return (
    <div className={`${styles.scrollContent} pb-24`}>
      <h5 className="md:hidden text-xl text-center w-full mb-8">
        Tap cards to see more
      </h5>
      <div
        className={`flex flex-wrap flex-row lg:justify-start justify-center`}
      >
        {items.map((item) => (
          <div className={"m-4"} key={item.key}>
            <WorkItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;

import React, { ReactElement } from "react";
import WorkItem from "@components/WorkItem";

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
    desc: "I worked for 4 years at Istanbul Airport. I have developed custom planner for personnel vacation and day-offs",
  },
  {
    key: "greenpeace",
    title: "Micro Site",
    desc: "Built a website where users can create their own unique character and make a human chain for global causes they can choose. Won couple of international awards",
  },
];

const Works = (): ReactElement => {
  return (
    <div className={"flex flex-wrap flex-row"}>
      {items.map((item) => (
        <div className={"m-4"} key={item.key}>
          <WorkItem item={item} />
        </div>
      ))}
    </div>
  );
};

export default Works;

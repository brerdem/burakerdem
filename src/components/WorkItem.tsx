import React, { ReactElement, useState } from "react";
import AnimatedText from "@components/AnimatedText";

const WorkItem = ({ item }: any): ReactElement => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onClick={() => setHover(!hover)}
      className={
        "w-[300px] cursor-pointer bg-slate-700 rounded-md overflow-hidden"
      }
    >
      <img
        src={`/images/brands/${item.key}.png`}
        className={`w-[300px] ${
          hover ? "h-0" : "h-[150px]"
        } object-cover transition-all`}
        alt={item.key}
      />

      <div className={"p-4"}>
        <div
          className={`${
            hover ? "h-0" : "h-[30px]"
          } overflow-hidden transition-all`}
        >
          <AnimatedText data={item.title} />
        </div>
        <div
          className={`${
            hover ? "h-[180px]" : "h-0"
          } overflow-hidden transition-all`}
        >
          {item.desc}
        </div>
      </div>
    </div>
  );
};

export default WorkItem;

import React, {
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import CountUp from "react-countup";
import useOnScreen from "../hooks";

const SkillItem = ({ item }: { item: any }): ReactElement => {
  const SIZE = 150;
  const STROKE_WIDTH = 10;

  const containerRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(containerRef);
  const progress = isVisible ? item.percentage : 0;
  const strokeWidth = isVisible ? STROKE_WIDTH : 0;

  const radius = (SIZE - STROKE_WIDTH) / 2;
  const circumference = radius * Math.PI * 2;
  const dash = useMemo(() => (progress * circumference) / 100, [progress]);

  return (
    <div>
      <div
        className={`relative w-[${SIZE}px] h-[${SIZE}px]`}
        ref={containerRef}
      >
        <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
          <circle
            fill={"none"}
            stroke={"#3b3b3b"}
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={radius}
            strokeWidth={`${strokeWidth}px`}
            style={{ transition: "all 2s ease" }}
          />
          <circle
            fill={"none"}
            stroke={item.color}
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={radius}
            strokeWidth={`${strokeWidth}px`}
            transform={`rotate(-90 ${SIZE / 2} ${SIZE / 2})`}
            strokeDasharray={`${dash} ${circumference - dash}`}
            strokeLinecap={"round"}
            style={{ transition: "all 2s ease" }}
          />
        </svg>
        <div
          className={`absolute w-full h-full top-0 left-0 flex items-center justify-center`}
        >
          <CountUp
            className={` text-2xl text-center`}
            style={{
              color: item.color,
            }}
            end={progress}
            suffix={"%"}
            duration={2}
          />
        </div>
      </div>
      <div className={"w-full flex flex-col justify-center items-center mt-4"}>
        {item.icon}
        {item.text && <div className={"text-xs"}>{item.text}</div>}
      </div>
    </div>
  );
};

export default SkillItem;

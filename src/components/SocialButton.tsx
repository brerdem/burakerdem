import React, { useState } from "react";

const SocialButton = ({ item }: any) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <button
      className={"flex flex-row items-center my-8"}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onClick={() => window.open(item.link, "_blank")}
    >
      {item.name !== "Instagram" ? (
        <svg viewBox={"0 0 24 24"} width={40} height={40} fill={item.color}>
          <path d={item.logoPath} />
        </svg>
      ) : (
        <img src={"images/insta.svg"} width={42} height={42} alt={item.name} />
      )}
      <span className={`ml-4 font-hand text-lg ${hover && "text-white"}`}>
        {item.suffixText}
      </span>
    </button>
  );
};

export default SocialButton;

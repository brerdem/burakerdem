import React from "react";

const Logo = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
        maskImage: "url(images/logo.svg)",
        WebkitMaskImage: "url(images/logo.svg)",
      }}
      className={"animate-gradientSwipe w-[150px] h-[150px]"}
    />
  );
};

export default Logo;

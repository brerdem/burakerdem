import React, { useState } from "react";

const AnimatedText = ({ data }: any) => {
  const hasMultipleText = Array.isArray(data);
  const [currentText, setCurrentText] = useState(
    hasMultipleText ? data[0] : data
  );
  const [index, setIndex] = useState(0);

  const handleNextText = () => {
    if (hasMultipleText) {
      const tempIndex = index + 1;
      setCurrentText(data[tempIndex % data.length]);
      setIndex(tempIndex);
    }
  };

  return (
    <div className={"relative"}>
      <span
        onAnimationIteration={handleNextText}
        className={`drop-shadow font-sans text-2xl absolute ${
          hasMultipleText && "animate-animText"
        }`}
      >
        {currentText}
      </span>
    </div>
  );
};

export default AnimatedText;

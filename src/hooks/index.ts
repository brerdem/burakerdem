import React, { ReactElement, RefObject, useEffect, useState } from "react";

export default function useOnScreen(ref: RefObject<HTMLDivElement>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      console.log("entry.intersectionRatio -->", entry.intersectionRatio);
      setIntersecting(entry.isIntersecting);
    });
    if (ref) observer.observe(<Element>ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
}

"use client";
import React from "react";
import Typed from "typed.js";

function Type() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Junior Developer", "Linux enthusiast"],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return <span className="text-red-700 font-semibold" ref={el}></span>;
}

export default Type;

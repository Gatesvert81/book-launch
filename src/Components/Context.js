import React, { createContext, useState } from "react";

export const NavContext = createContext();
export const AnimationContext = createContext();
function Context({ children }) {
  const [page, setPage] = useState("home");

  const textAnimate = {
    initial: { opacity: 0, y: "8%" },
    whileInView: { opacity: 1, y: "0%" },
    transition: {
      default: {
        duration: 0.5,
      },
    },
  };


  const imageAnimate = {
    initial: {
      opacity: 0,
      scale: 1.1,
    },
    whileInView: {
      opacity: 1,
      scale: 1,
    },
    transition: {
      default: {
        duration: 0.5,
      },
    },
    whileHover: {
      scale: 1.05,
    },
  };

  return (
    <NavContext.Provider value={[page, setPage]}>
      <AnimationContext.Provider value={{ textAnimate, imageAnimate }}>
        {children}
      </AnimationContext.Provider>
    </NavContext.Provider>
  );
}

export default Context;
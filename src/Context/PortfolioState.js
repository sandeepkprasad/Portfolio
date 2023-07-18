import { useState } from "react";
import portfolioContext from "./portfolioContext";

const PortfolioState = (props) => {
  const [mode, setMode] = useState("light");

  const applyMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <portfolioContext.Provider value={{ mode, applyMode }}>
      {props.children}
    </portfolioContext.Provider>
  );
};

export default PortfolioState;

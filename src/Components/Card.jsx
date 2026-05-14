import { useEffect, useState } from "react";
import Buttons from "./Buttons.jsx";
import Count from "./Count.jsx";
import Reset from "./Reset.jsx";
import Title from "./Title.jsx";

export default function Card() {
  // Set Counter State: ==========================================================================
  const [counter, setCounter] = useState(0);
  const [limit, setLimit] = useState(false);

  // Press Space Increment Counter: ==============================================================
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === "Space") setCounter(counter + 1);
    };
    if (counter < 5) {
      window.addEventListener("keypress", handleKeyPress);
    } else {
      setLimit(true);
    }
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [counter]);

  return (
    <>
      <Title limit={limit} />
      <Count counter={counter} />
      <Reset setLimit={setLimit} setCounter={setCounter} />
      <Buttons limit={limit} setCounter={setCounter} />
    </>
  );
}

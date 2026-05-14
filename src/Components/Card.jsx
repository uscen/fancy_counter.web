import { useEffect, useState } from "react";
import Buttons from "./Buttons.jsx";
import Count from "./Count.jsx";
import Reset from "./Reset.jsx";
import Title from "./Title.jsx";

export default function Card() {
  // Set Counter State: ==========================================================================
  const [counter, setCounter] = useState(0);

  // drive the variable with exist state i don't need useState() here: ==========================
  const limit = counter === 5;

  // Press Space Increment Counter: ==============================================================
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === "Space") setCounter((prev) => prev + 1);
    };
    if (!limit) window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [counter]);

  return (
    <main className={`card-container ${limit && "card-limit"}`}>
      <Title limit={limit} />
      <Count counter={counter} />
      <Reset setCounter={setCounter} />
      <Buttons limit={limit} setCounter={setCounter} />
    </main>
  );
}

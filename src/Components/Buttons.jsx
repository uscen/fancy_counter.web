import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

// Use Children Patterns for not have props driling without using state managment soultions: =====
export default function Buttons({ children }) {
  return <div className="button-container">{children}</div>;
}

export function Button({ op, setCounter, limit }) {
  const handleClick = (e) => {
    if (!limit)
      setCounter((prev) => {
        const newCount = op === "plus" ? prev + 1 : prev - 1;
        return newCount < 0 ? 0 : newCount;
      });

    // remove focus from button to make incrase by space works: ==================================
    e.currentTarget.blur();
  };

  return (
    <button
      disabled={limit}
      onClick={handleClick}
      className={`btn ${limit && "disabled"}`}
    >
      {op === "plus" ? (
        <PlusIcon className="btn-icon" />
      ) : (
        <MinusIcon className="btn-icon" />
      )}
    </button>
  );
}

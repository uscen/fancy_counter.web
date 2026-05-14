import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function Buttons({ setCounter, limit }) {
  return (
    <div className="button-container">
      <Button op="minus" setCounter={setCounter} limit={limit} />
      <Button op="plus" setCounter={setCounter} limit={limit} />
    </div>
  );
}

function Button({ op, setCounter, limit }) {
  const handleClick = () => {
    if (!limit)
      setCounter((prev) => {
        const newCount = op === "plus" ? prev + 1 : prev - 1;
        return newCount < 0 ? 0 : newCount;
      });
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

import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function Buttons({ setCounter, counter, limit }) {
  return (
    <div className="button-container">
      <Button
        op="minus"
        setCounter={setCounter}
        counter={counter}
        limit={limit}
      />
      <Button
        op="plus"
        setCounter={setCounter}
        counter={counter}
        limit={limit}
      />
    </div>
  );
}

function Button({ op, setCounter, counter, limit }) {
  const handleClick = (op) => {
    if (op !== "plus" && counter === 0) return;
    if (!limit) setCounter((prev) => (op === "plus" ? prev + 1 : prev - 1));
  };
  return (
    <button
      onClick={() => handleClick(op)}
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

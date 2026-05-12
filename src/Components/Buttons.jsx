import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function Buttons({ setCounter, counter, limit }) {
  const handlePlusBtn = () => {
    if (!limit) setCounter((prev) => prev + 1);
  };
  const handleMinusBtn = () => {
    if (counter <= 0) {
      return;
    }
    if (!limit) setCounter((prev) => prev - 1);
  };
  return (
    <div className="button-container">
      <button
        disabled={limit}
        onClick={handleMinusBtn}
        className={`btn ${limit && "disabled"}`}
      >
        <MinusIcon className="btn-icon" />
      </button>
      <button
        disabled={limit}
        onClick={handlePlusBtn}
        className={`btn ${limit && "disabled"}`}
      >
        <PlusIcon className="btn-icon" />
      </button>
    </div>
  );
}

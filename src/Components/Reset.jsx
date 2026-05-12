import { ResetIcon } from "@radix-ui/react-icons";
export default function Reset({ setCounter, setLimit }) {
  return (
    <button
      onClick={() => {
        setLimit(false);
        setCounter(0);
      }}
      className="btn-reset"
    >
      <ResetIcon className="btn-reset-icon" />
    </button>
  );
}

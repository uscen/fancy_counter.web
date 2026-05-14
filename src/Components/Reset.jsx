import { ResetIcon } from "@radix-ui/react-icons";
export default function Reset({ setCounter }) {
  return (
    <button
      onClick={(e) => {
        setCounter(0);
        e.currentTarget.blur();
      }}
      className="btn-reset"
    >
      <ResetIcon className="btn-reset-icon" />
    </button>
  );
}

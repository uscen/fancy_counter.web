import { ResetIcon } from "@radix-ui/react-icons";
export default function Reset({ setCounter }) {
  return (
    <button
      onClick={() => {
        setCounter(0);
      }}
      className="btn-reset"
    >
      <ResetIcon className="btn-reset-icon" />
    </button>
  );
}

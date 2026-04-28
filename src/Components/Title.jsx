export default function Title({ limit }) {
  return (
    <h1 className="title">{limit ? "Limit Reached!!" : "Fancy Counter"}</h1>
  );
}

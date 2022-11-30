export function TodoItem({
  id,
  description,
  isDone = false,
  onToggle
}) {
  const className = isDone ? "done" : "";
  return (
    <li key={id} className={"item " + className} onClick={() =>{onToggle(id)}}>
      {description}
    </li>
  );
}
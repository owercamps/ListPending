import { TodoItem } from "./TodoItem";

export function TodoList({onToggle, data =[] }) {
  if (data.length === 0) {
    return(
      <>
      <h4 className="msg-color">No hay pendientes para mostrar</h4>
      </>
    )
  }
  const incomplete = data.filter(({ isDone }) => !isDone);
  return (
    <>
      <span>Pendientes: {incomplete.length}</span>
      <ul className="card">
        {
          data?.map(({id,description,isDone}) =>(
            <TodoItem key={id} id={id} description={description} isDone={isDone} onToggle={onToggle} />
          ))
        }
      </ul>
    </>
  );
}
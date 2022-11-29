import { TodoItem } from "./TodoItem";

export function TodoList({data =[] }) {
  if (data.length === 0) {
    return(
      <>
      <h4 className="msg-color">No hay pendientes para mostrar</h4>
      </>
    )
  }
  return (
    <>
      <span>Pendientes: {data.length}</span>
      <ul className="card">
        {
          data?.map(({id,description,isDone}) =>(
            <TodoItem id={id} description={description} isDone={isDone} />
          ))
        }
      </ul>
    </>
  );
}
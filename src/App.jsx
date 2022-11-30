import { useState } from "react";
import "./App.css";
import FormNew from "./components/Form";
import { TodoList } from "./components/TodoList";

const listFull = [
  { id: 1, description: "Hacer la compra", isDone: false },
  { id: 2, description: "Terminar la tarea", isDone: false },
  { id: 3, description: "Pasear a Milo", isDone: false },
];

export default function App() {
  const [list, setList] = useState(listFull)
  const UpdatePending = (id) => {
    const data = [...list]
    const information = data.findIndex((e) => (e.id === id));
    data[information].isDone = !data[information].isDone;
    setList(data);
  }

  const handleSubmit = (e) =>{
    console.log(e);
    const addItem = {
      id: list.at(-1).id + 1,
      description: e,
      isDone: false
    }
    setList((after) =>[...after,addItem])
  }

  return (
    <div className="App">
      <h1>Lista de Pendientes</h1>

      <ul className="card">
        <TodoList data={list} onToggle={UpdatePending} />
        <FormNew onSubmit={handleSubmit} />
      </ul>
    </div>
  );
}
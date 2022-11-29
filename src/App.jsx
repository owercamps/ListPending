import { useState } from "react";
import "./App.css";
import { TodoList } from "./components/TodoList";

let listPending = [
  { id: 1, description: "Hacer la compra", isDone: false },
  { id: 2, description: "Terminar la tarea", isDone: false },
  { id: 3, description: "Pasear a Milo", isDone: false },
];

export default function App() {
  const { list, setList } = useState(listPending);
  return (
    <div className="App">
      <h1>Lista de Pendientes</h1>

      <ul className="card">
        <TodoList data={ list }/>
      </ul>
    </div>
  );
}
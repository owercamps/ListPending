import { useState } from "react";
import ButtonForm from "./Button";

function FormNew({onSubmit}) {
  const [info, setInfo] = useState("");

  const handleInput = (e) => {
    setInfo(e.target.value)
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    onSubmit(info);
    setInfo("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4 className="center w-100">Registro Nuevo Pendiente</h4>
        <label htmlFor="description">Nombre del Pendiente</label>
        <input type={"text"} id={"input-name"} value={info} placeholder={"ingrese el pendiemte"} name={"description"} onChange={handleInput} />
        <ButtonForm className="btn btn-primary" name={"Enviar"} />
      </form>
    </>
  )
}

export default FormNew;
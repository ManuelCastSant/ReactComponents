import React from 'react'

const Form = ({tarea,agregarTarea,setTarea,listaTareas}) => {
  return (
    <div>
        <form className="d-flex" onSubmit={
          (evt)=>{
            evt.preventDefault(); /* evita los metodos get, post de un componente */
            agregarTarea(tarea); 
            setTarea("") /* limpiar el componente despues de ungresar un valor */
            console.log(listaTareas)
          }
        }>
          <input  required 
          className="p-1 me-2 "
          placeholder="Agregar una tarea +" 
          value={tarea} /* asignamos la modificacion del hook */
          onChange={evt => {
            setTarea(evt.target.value) 
            console.log(tarea);
          }}
          /> {/* Recuperacion de datos */}

          <button className="btn btn-primary">Agregar</button>
        </form>
    </div>
  )
}

export default Form

import React from 'react'

const Tarea = ({status,tarea,editarTarea,eliminarTarea,id}) => {
  return (
    <div  className=
                {
                  status ? "alert alert-danger mb-2 col-9 d-flex justify-content-around " :
                  "alert alert-success mb-2 col-9 d-flex justify-content-around "
                }
                >
                  <p>{tarea}</p>
                    <div>
                      <button className="btn btn-warning mb-2" onClick={()=>editarTarea(id)}>Editar</button>
                      <button className="btn btn-danger mb-2" onClick={()=>eliminarTarea(id)}>Eliminar</button>                
                    </div>
                </div>
  )
}

export default Tarea

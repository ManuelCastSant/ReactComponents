import { useState } from "react"
import Tarea from "./components/Tarea";
import Button from "./components/Button";
import Form from "./components/Form";

// var listaTareas = [];

export default function App() {
    const [tarea, setTarea] = useState("");
    const [contador, setContador] = useState(0);
    const[listaTareas, setListaTareas] = useState([]);

    // !Metodo para agregar una tarea
    
    const agregarTarea = (task) => {
      /* 1. Recibir datos */
      let nuevaTarea = {
        id: contador,
        tarea:task,
        status:true,
      }
      /* 2. Generar un id */
      setContador(contador+1)
      /* 3. Agregar los datos con el id */
      setListaTareas([...listaTareas, nuevaTarea]) 
    }

    const editarTarea = (id) => {
      let listaTemporal = []
      listaTareas.map(({status, id:idTarea, tarea})=>{
        if(idTarea === id){
          listaTemporal=[...listaTemporal, {
            status:!status,
            id: idTarea,
            tarea:tarea,
          }]
        }else{
          listaTemporal=[...listaTemporal, {
            status:status,
            id: idTarea,
            tarea:tarea,
          }]
        }
      })
      setListaTareas(listaTemporal);
    }

    // ! Eliminar el componente del arreglo
    const eliminarTarea = (id) => {
      const nuevaListaTareas = listaTareas.filter(elemento => elemento.id !== id);
      setListaTareas(nuevaListaTareas);
    }


    

  return (
    <>
      <div className="fluid mt-5 d-flex flex-column align-items-center">
      <Form
      tarea= {tarea}
      agregarTarea={agregarTarea}
      setTarea={setTarea}
      listaTareas={listaTareas}
      />
          {
            listaTareas.length > 0 ? 
            listaTareas.map(({tarea, id, status}, index) =>{
              return(
                <Tarea 
                key = {index}
                status = {status}
                tarea = {tarea}
                id = {id}
                editarTarea = {editarTarea}
                eliminarTarea = {eliminarTarea}
                />
              );
            }):
            null
          }
            <Button
            nombre="Saluda"
            clase="primary"/>
             <Button
            nombre="Despidete"
            clase="warning"/>
      </div>
    </>
  )
}
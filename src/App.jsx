import { useState, useEffect } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'

function App() {

  const [pacientes, setPacientes] = useState([]);
  // para editar informacion
  const [paciente, setPaciente] = useState({});

  //Guadar el local Storage

  //Obtener lo que hay en local storate
  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []  // Si no hay, lo pone como arreglo
      setPacientes(pacientesLS)
    }
    obtenerLS();
  },[])

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  },[pacientes])

  // Eliminar paciente 
  const eliminarPaciente = (id) => {

    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }

  

  return (
    <div className="container mx-auto mt-20">
     <Header/>
     <div className="mt-12 md:flex">
      <Formulario 
      pacientes={pacientes} 
      setPacientes={setPacientes}
      paciente ={paciente} 
      setPaciente ={setPaciente}/>

      <ListadoPacientes 
      pacientes={pacientes}
      editarPaciente = {setPaciente}
      eliminarPaciente ={eliminarPaciente}/>
    </div>
    </div>
  )
}

export default App

import Paciente from "./Paciente";
const ListadoPacientes = ({pacientes, editarPaciente, eliminarPaciente}) => {


  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ? (

        <>
        <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus {''} <span className="text-indigo-600 font-bold">Pacientes y citas</span>
      </p>

      { pacientes.map((paciente) => (

<Paciente 
key={paciente.id} 
paciente = {paciente} 
editarPaciente = {editarPaciente}
eliminarPaciente={eliminarPaciente}/>
        
      ))}
       
        </>
      ) 
      : 
      (

        <>
        <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Agrega pacientes {''} <span className="text-indigo-600 font-bold">Y apareran en esta sesion</span>
      </p>
      
      </>

      )
      }
      
      
    </div>

  )
}

export default ListadoPacientes;
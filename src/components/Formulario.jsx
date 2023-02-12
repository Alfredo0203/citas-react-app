import {useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({pacientes, setPacientes, paciente, setPaciente})  => {

  const [nombre, setNombre] = useState("");
  const [propietario, setPropitario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  //error when empty
  const [error, setError] = useState(false)

  useEffect(() => {
    if(Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropitario (paciente.propietario);
      setEmail(paciente.email);
      setFecha (paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  },[paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36);

    return random + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validacion del formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')) {
      setError(true)
      return
    } 
    else {
      setError(false)
      const objetoPaciente = {
        nombre, 
        propietario, 
        email, 
        fecha, 
        sintomas
      }

      if(paciente.id ) {
        objetoPaciente.id = paciente.id;
        const pacienteActualizado = 
        pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
        setPacientes(pacienteActualizado)
        setPaciente({})
       }
 
       else {
        objetoPaciente.id = generarId()
     // Los tres puntos hacen que tomen una copia de pacientes y crear nueva en lugar de reescribir
     setPacientes([...pacientes,objetoPaciente]);
       }
    
    setNombre('')
    setPropitario('')
    setEmail("")
    setFecha("")
    setSintomas('')

    }
  }
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
<h2 className="font-black text-3xl text-center">Segumiento pacientes</h2>

<p className="text-lg mt-5 text-center mb-10">Añade pacientes y {''} <span className="text-indigo-600 font-bold ">Administralos</span></p>

<form className="bg-white shadow-md rounded-lg py-10 px-5" onSubmit={handleSubmit}>
 {/* Mostrar error */}
  {error && <Error>
    <p>Todos los campos son requeried</p>
    </Error>
    }
  <div className="mb-5">
    <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
    <input id="nombre" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" 
    placeholder="Nombre de la mascota" value={nombre} onChange={ (e) => setNombre(e.target.value)}/>

  </div>

  <div className="mb-5">
    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre propietario</label>
    <input id="nombre" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" 
    placeholder="Nombre del propietario" value={propietario} onChange={ (e) => setPropitario(e.target.value)}/>
  </div>

  <div className="mb-5">
    <label htmlFor="correo" className="block text-gray-700 uppercase font-bold">Correo electronico</label>
    <input id="correo" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="email" 
    placeholder="Correco electronico" value={email} onChange={ (e) => setEmail(e.target.value)}/>
  </div>

  <div className="mb-5">
    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
    <input id="alta" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="date"
    value={fecha} onChange={ (e) => setFecha(e.target.value)} />
  </div>

  <div className="mb-5">
    <label htmlFor="asintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
    <textarea id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
    placeholder="Describe los sintomas" value={sintomas} onChange={ (e) => setSintomas(e.target.value)}/>
  </div>

  <input type="submit" 
  className="bg-indigo-600 w-full p-3 text-white font-bold uppercase hover:bg-indigo-700 cursor-pointer transition-all" 
  value={paciente.id? 'Editar paciente' : 'Agregar paciente'}/>

</form>
    </div>

    

  )
}

export default Formulario;
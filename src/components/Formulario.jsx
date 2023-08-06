import { useState, useEffect } from "react"
import Error from "./Error";

const Formulario = ({ pacient, setPacient, paciente }) => {

    const [mascota, setMascota] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [alta, setAlta] = useState('');
    const [sintomas, setSintomas] = useState('');

    // Estado de error cuando no hay nada en uno de los campos
    const [error, seterror] = useState(false)

    // Generador de ID aleatorio
    const generarId = () => {
        const random = Math.random().toString(36).substr(2)
        const fecha = Date.now().toString(36)
        return random + fecha
    }

    // editar del componente Paciente
    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setMascota(paciente.mascota)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setAlta(paciente.alta)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])

    const handleSubmit = (e) => {
        e.preventDefault();

        // Advertencia del formulario incompleto
        if ([mascota, propietario, email, alta, sintomas].includes('')) {
            seterror(true)
        } else {
            seterror(false)
        }
        // Obejto de paciente
        const objetoPaciente = {
            mascota,
            propietario,
            email,
            alta,
            sintomas,
        }

        if(paciente.id) {
            // Editando el Registro
            objetoPaciente.id = paciente.id
            console.log(objetoPaciente);
            console.log(pacient);
            const pacienteActualizado = pacient.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
            setPacient(pacienteActualizado)
        }else {
            // Nuevo Registro
            objetoPaciente.id = generarId()
            setPacient([...pacient, objetoPaciente])
        }

        // Reiniciando el formulario
        setMascota('')
        setPropietario('')
        setEmail('')
        setAlta('')
        setSintomas('')
    }

    return (

        <section className="md:w-1/2 lg:w-2/50 mx-5">

            <h2 className="text-center text-4xl font-black">Seguimiento pacientes</h2>

            <p className="text-center p-4 text-lg font-bold">
                Añade Pacientes y
                <span className="text-indigo-600"> Administralos</span>
            </p>

            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-md shadow-md py-10 px-5 mb-10"
            >
                {error && <Error> <p>Todos los campos son obligatorios</p> </Error>}

                <div className="mb-5">
                    <label htmlFor="nombreMascota" className="block text-gray-700 font-bold uppercase">
                        Nombre Mascota
                    </label>

                    <input
                        id="nombreMascota"
                        type="text"
                        className="w-full placeholder-gray-400 rounded-md border-2 p-2 mt-2"
                        placeholder="Nombre de la Mascota "
                        value={mascota}
                        onChange={(e) => setMascota(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="Propietario" className="block text-gray-700 font-bold uppercase">
                        Nombre Propietario
                    </label>

                    <input
                        id="Propietario"
                        type="text"
                        className="w-full placeholder-gray-400 rounded-md border-2 p-2 mt-2"
                        placeholder="Nombre Propietario"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 font-bold uppercase">
                        Email
                    </label>

                    <input
                        id="email"
                        type="text"
                        className="w-full placeholder-gray-400 rounded-md border-2 p-2 mt-2"
                        placeholder="Email Contacto Propietario"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="Fecha" className="block text-gray-700 font-bold uppercase">
                        Alta
                    </label>

                    <input
                        id="Fecha"
                        type="date"
                        className="w-full placeholder-gray-400 rounded-md border-2 p-2 mt-2"
                        value={alta}
                        onChange={(e) => setAlta(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 font-bold uppercase">
                        Sintomas
                    </label>

                    <input
                        id="sintomas"
                        type="text"
                        className="w-full placeholder-gray-400 rounded-md border-2 p-2 mt-2 pb-24"
                        placeholder="Descripcion de los sintomas"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white font-bold text-md uppercase hover:bg-indigo-700 rounded-md cursor-pointer"
                    value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
                />

            </form>

        </section>
    )
}

export default Formulario
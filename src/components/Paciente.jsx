const Paciente = ({paciente, setPaciente}) => {

    return (
        <div className="bg-white shadow-md p-6 mx-5 rounded-md mb-5">
            <p className="font-bold uppercase mb-4 text-gray-700">nombre:
                <span className="font-medium normal-case"> {paciente.mascota}</span>
            </p>

            <p className="font-bold uppercase mb-3 text-gray-700">Propietario:
                <span className="font-medium normal-case"> {paciente.propietario}</span>
            </p>

            <p className="font-bold uppercase mb-3 text-gray-700">Email:
                <span className="font-medium normal-case"> {paciente.email}</span>
            </p>

            <p className="font-bold uppercase mb-3 text-gray-700">Alta:
                <span className="font-medium normal-case"> {paciente.alta}</span>
            </p>

            <p className="font-bold uppercase text-gray-700">Sintomas:{' '}
                <span className="font-medium normal-case"> 
                    {paciente.sintomas}
                </span>
            </p>
            
            <div className="pt-6 flex justify-between">

                <button
                    type="button"
                    onClick={ () => setPaciente(paciente) }
                    className="p-2 px-5 rounded-md bg-blue-600 hover:bg-blue-700 uppercase font-bold text-white"
                >Editar</button>

                <button
                    type="button"
                    className="p-2 px-5 rounded-md bg-red-600 hover:bg-red-700 uppercase font-bold text-white"
                >Eliminar</button>

            </div>
        </div>
    )
}

export default Paciente
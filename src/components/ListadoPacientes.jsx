import Paciente from "./Paciente"

const ListadoPacientes = ({ pacient, setPaciente }) => {

    return (

        <section className="md:w-1/2 lg:w-3/5 h-screen md:overflow-y-scroll">

            {pacient.length ? (
                <>
                    <h2 className="text-center text-4xl font-black">Listado Pacientes</h2>

                    <p className="text-center p-4 text-lg font-bold">
                        Administra tus
                        <span className="text-indigo-600">{' '}Pacientes y Citas</span>
                    </p>

                    {pacient.map((paciente) => (
                        <Paciente
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                        />
                        )
                    )}
                </>
            ) : (
                <>
                    <h2 className="text-center text-4xl font-black">No hay pacientes</h2>

                    <p className="text-center p-4 text-lg font-bold">
                        Comienza agregando pacientes
                        <span className="text-indigo-600">{' '}y aparecerán en este lugar</span>
                    </p>
                </>
            )}

        </section>
    )
}

export default ListadoPacientes

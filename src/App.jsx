import { useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [pacient, setPacient] = useState([]);
  const [paciente, setPaciente] = useState({})

  return (
    <div className="container mx-auto mt-10">

      <Header />

      <div className="mt-10 md:flex">

        <Formulario
          pacient={pacient}
          setPacient={setPacient}
          paciente={paciente}
        />

        <ListadoPacientes
          pacient={pacient}
          setPaciente={setPaciente}
        />

      </div>

    </div>
  )
}

export default App
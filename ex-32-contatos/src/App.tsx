// importa componentes
import CRTabAgenda from './containers/tabela'
import CSSGlobal from './estilos/globais' //estilizacao global

// cria aplicacao
function App() {
  return (
    <>
      <CSSGlobal />
      <div className="container">
        <CRTabAgenda></CRTabAgenda>
      </div>
    </>
  )
}

// exporta
export default App

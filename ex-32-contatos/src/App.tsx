// importa componentes
import CRCabecalho from './containers/cabecalho'
import CRPrincipal from './containers/principal'
import CSSGlobal from './estilos/globais' //estilizacao global

// cria aplicacao
function App() {
  return (
    <>
      <CSSGlobal />
      <CRCabecalho />
      <CRPrincipal />
    </>
  )
}

// exporta
export default App

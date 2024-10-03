// importacoes
// import Teste from './teste'
import Projetos from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal></EstiloGlobal>
      {/* <Teste></Teste> */}
      <Container>
        <Sidebar></Sidebar>
        <main>
          <Sobre></Sobre>
          <Projetos></Projetos>
        </main>
      </Container>
    </>
  )
}

export default App

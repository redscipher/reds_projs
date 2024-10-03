// importacoes
import { ThemeProvider } from 'styled-components'
// import Teste from './teste'
import Projetos from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'
import temaLight from './themes/light'
import temaDark from './themes/dark'
import { useState } from 'react'

function App() {
  const [estaUsandoDark, setEstaUsandoDark] = useState(false)

  function trocaTema() {
    setEstaUsandoDark(!estaUsandoDark)
  }

  return (
    <ThemeProvider theme={estaUsandoDark ? temaDark : temaLight}>
      <EstiloGlobal></EstiloGlobal>
      {/* <Teste></Teste> */}
      <Container>
        <Sidebar trocaTema={trocaTema}></Sidebar>
        <main>
          <Sobre></Sobre>
          <Projetos></Projetos>
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App

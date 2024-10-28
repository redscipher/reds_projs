// importa componentes
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CSSGlobal from './estilos/globais' //estilizacao global
import Inicial from './paginas/inicial'
import Cadastro from './paginas/cadastro'
import CRCabecalho from './containers/cabecalho'

// cria as rotas da aplicacao
const Rotas = createBrowserRouter([
  {
    path: '/',
    element: <Inicial></Inicial>
  },
  {
    path: '/cadastro',
    element: <Cadastro></Cadastro>
  }
])

// cria aplicacao
function App() {
  return (
    <>
      <CSSGlobal />
      <CRCabecalho />
      <RouterProvider router={Rotas}></RouterProvider>
    </>
  )
}

// exporta
export default App

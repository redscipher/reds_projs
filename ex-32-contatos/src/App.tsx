// importa componentes
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CSSGlobal from './globais/globais' //estilizacao global
import Inicial from './paginas/inicial'
import Cadastro from './paginas/cadastro'
import CRCabecalho from './containers/cabecalho'
import { Provider } from 'react-redux'
import armazem from './armazem'

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
    <Provider store={armazem}>
      <CSSGlobal />
      <CRCabecalho />
      <RouterProvider router={Rotas}></RouterProvider>
    </Provider>
  )
}

// exporta
export default App

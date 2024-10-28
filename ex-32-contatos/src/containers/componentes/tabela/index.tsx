// importa estilos
import { ReactNode } from 'react'
import * as E from './estilos'
import * as G from '../../../estilos/globais'
import CSTabLinha from './linhas'

// tipo
type Props = {
  children?: ReactNode
}

// cria componente
const CRTabAgenda = (_Props: Props) => {
  // def retorno
  return (
    <div className="table-responsive me-3">
      <E.CSTabela>
        <caption>Lista de pessoas</caption>
        <E.CSTabCab>
          {/* colunas */}
          <G.CSTabLinha>
            <th>nome completo</th>
            <th>E-mail</th>
            <th colSpan={2}>Telefone</th>
          </G.CSTabLinha>
        </E.CSTabCab>
        <E.CSTabCorpo>
          {/* dados */}
          <CSTabLinha
            Nome={'Teste'}
            Email={'email@hotmail.com'}
            Contato={'34999999999'}
          ></CSTabLinha>
          <CSTabLinha
            Nome={'Teste2'}
            Email={'email@gmail.com'}
            Contato={'34988888888'}
          ></CSTabLinha>
        </E.CSTabCorpo>
        <E.CSTabRoda>
          {/* resumo */}
          <G.CSTabLinha>
            <td colSpan={3}>Total: </td>
            <td>1</td>
          </G.CSTabLinha>
        </E.CSTabRoda>
      </E.CSTabela>
    </div>
  )
}

// exportacao
export default CRTabAgenda

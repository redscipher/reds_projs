// importa estilos
import { ReactNode } from 'react'
import * as E from './estilos'
import * as G from '../../../globais/globais'
import CSTabLinha from './linhas'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../../armazem'

// tipo
type Props = {
  children?: ReactNode
}

// cria componente
const CRTabAgenda = (_Props: Props) => {
  // objeto
  const { itens } = useSelector((estado: RootReducer) => estado.contatos)
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
          {/* loop p/ criar as linhas da tabela */}
          {itens.map((item) => {
            return (
              <CSTabLinha
                key={item.id}
                id={item.id}
                Nome={item.Nome}
                Email={item.Email}
                Contato={item.Contato}
                Selecionado={item.Selecionado}
              ></CSTabLinha>
            )
          })}
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

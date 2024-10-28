// importa estilos
import { ReactNode } from 'react'
import * as E from './estilos'

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
          <E.CSTabLinha>
            <th>nome completo</th>
            <th>E-mail</th>
            <th colSpan={2}>Telefone</th>
          </E.CSTabLinha>
        </E.CSTabCab>
        <E.CSTabCorpo>
          {/* dados */}
          <E.CSTabLinha>
            <td>Nome Teste</td>
            <td>emailteste@gmail.com</td>
            <td>34999999999</td>
            <td>
              <input
                type="checkbox"
                onClick={() => console.log('clickou')}
              ></input>
            </td>
          </E.CSTabLinha>
          <E.CSTabLinha>
            <td>Nome Teste 2</td>
            <td>emailteste2@gmail.com</td>
            <td>34988888888</td>
            <td>
              <input type="checkbox" onClick={() => console.log('clickou 2')}></input>
            </td>
          </E.CSTabLinha>
        </E.CSTabCorpo>
        <E.CSTabRoda>
          {/* resumo */}
          <E.CSTabLinha>
            <td colSpan={3}>Total: </td>
            <td>1</td>
          </E.CSTabLinha>
        </E.CSTabRoda>
      </E.CSTabela>
    </div>
  )
}

// exportacao
export default CRTabAgenda

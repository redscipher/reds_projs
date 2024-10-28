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
    <>
      <div className="table-responsive">
        <E.CSTabela>
          <caption>Lista de pessoas</caption>
          <E.CSTabCab>
            {/* colunas */}
            <E.CSTabLinha>
              <th>nome completo</th>
              <th>E-mail</th>
              <th>Telefone</th>
            </E.CSTabLinha>
          </E.CSTabCab>
          <E.CSTabCorpo>
            {/* dados */}
            <E.CSTabLinha>
              <td>Nome Teste</td>
              <td>emailteste@gmail.com</td>
              <td>34999999999</td>
            </E.CSTabLinha>
          </E.CSTabCorpo>
          <E.CSTabRoda>
            {/* resumo */}
            <E.CSTabLinha>
              <td colSpan={2}>Total: </td>
              <td>1</td>
            </E.CSTabLinha>
          </E.CSTabRoda>
        </E.CSTabela>
      </div>
    </>
  )
}

// exportacao
export default CRTabAgenda

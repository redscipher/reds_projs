// importacoes
import { ReactNode } from 'react'
import * as E from './estilos'
import CRTabAgenda from '../componentes/tabela'
import { CSBotaoAdc, CSBotaoDel } from '../../globais/globais'

// tipo
type Props = {
  children?: ReactNode
}

// componente
const CRPrincipal = (_Props: Props) => {
  // def retorno
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row flex-grow-1">
          <E.SCPrincipal>
            <div className="col-8">
              <CRTabAgenda />
            </div>
            <div className="col-4">
              <CSBotaoAdc type="button" to="/cadastro">
                Adicionar
              </CSBotaoAdc>
              <E.CSBotaoEditar type="button" to="/cadastro">
                Editar
              </E.CSBotaoEditar>
              <CSBotaoDel type="button">Remover</CSBotaoDel>
            </div>
          </E.SCPrincipal>
        </div>
      </div>
    </div>
  )
}

// exportacoes
export default CRPrincipal

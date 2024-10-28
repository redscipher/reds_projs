// importacoes
import { ReactNode } from 'react'
import * as E from './estilos'
import CRTabAgenda from '../componentes/tabela'
import { CSBotao } from '../../estilos/globais'

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
              <E.CSBotaoAdc type="button" to="/cadastro">
                Adicionar
              </E.CSBotaoAdc>
              <CSBotao type="button">Editar</CSBotao>
              <E.CSBotaoDel type="button">Remover</E.CSBotaoDel>
            </div>
          </E.SCPrincipal>
        </div>
      </div>
    </div>
  )
}

// exportacoes
export default CRPrincipal

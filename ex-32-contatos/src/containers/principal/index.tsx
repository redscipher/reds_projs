// importacoes
import { ReactNode } from 'react'
import * as E from './estilos'
import CRTabAgenda from '../componentes/tabela'
import { CSBotaoAdc, CSBotaoDel } from '../../globais/globais'
import { useDispatch } from 'react-redux'
import { RemoverLinhaAcao } from '../../armazem/redutores/contatos'

// tipo
type Props = {
  children?: ReactNode
}

// componente
const CRPrincipal = (_Props: Props) => {
  // cria o despacho
  const despacho = useDispatch()

  // def retorno
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row flex-grow-1">
          <E.SCPrincipal>
            <div className="col-md-8 col-12">
              <CRTabAgenda />
            </div>
            <div className="col-md-4 col-12">
              <CSBotaoAdc type="button" to="/cadastro">
                Adicionar
              </CSBotaoAdc>
              <E.CSBotaoEditar type="button" to="/cadastro">
                Editar
              </E.CSBotaoEditar>
              <CSBotaoDel
                type="button"
                onClick={() => despacho(RemoverLinhaAcao())}
              >
                Remover
              </CSBotaoDel>
            </div>
          </E.SCPrincipal>
        </div>
      </div>
    </div>
  )
}

// exportacoes
export default CRPrincipal

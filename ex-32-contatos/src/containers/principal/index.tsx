// importacoes
import { ReactNode } from 'react'
import * as E from './estilos'
import CRTabAgenda from '../componentes/tabela'

// tipo
type Props = {
  children?: ReactNode
}

// componente
const CRPrincipal = (_Props: Props) => {
  // def retorno
  return (
    <div className="container-fluid">
      <div className="row flex-grow-1">
        <E.SCPrincipal>
          <div className="container">
            <CRTabAgenda />
          </div>
        </E.SCPrincipal>
      </div>
    </div>
  )
}

// exportacoes
export default CRPrincipal

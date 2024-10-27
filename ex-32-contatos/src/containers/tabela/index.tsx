// importa estilos
import { ReactNode } from 'react'
import * as E from './estilos'

// tipo
type Props = {
  children?: ReactNode
}

// cria componente
const CRTabAgenda = (Props: Props) => {
  // def retorno
  return (
    <>
      <p>Tabela</p>
      {Props.children !== undefined && Props.children}
    </>
  )
}

// exportacao
export default CRTabAgenda

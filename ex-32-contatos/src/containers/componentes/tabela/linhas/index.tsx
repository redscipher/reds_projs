// importacoes
import * as E from './estilos'
import * as G from '../../../../estilos/globais'
import { useState } from 'react'

// tipos
type Props = {
  Nome: string
  Email: string
  Contato: string
  Selecionado?: boolean
}

// componente: efetua desestruturacao das propriedades passadas
const CSTabLinha = ({ Nome, Email, Contato, Selecionado }: Props) => {
  // cria estados
  const [flgSel, setFlgSel] = useState(false)

  // def retorno
  return (
    <G.CSTabLinha>
      <td>{Nome}</td>
      <td>{Email}</td>
      <td>{Contato}</td>
      <td>
        <input
          type="checkbox"
          checked={Selecionado}
          onClick={() => setFlgSel(!flgSel)}
        ></input>
      </td>
    </G.CSTabLinha>
  )
}

// exportacoes
export default CSTabLinha

// importacoes
import * as E from './estilos'
import * as G from '../../../../globais/globais'
import { useState } from 'react'
import ClsContato from '../../../../globais/clsContatos'
import { useDispatch } from 'react-redux'
import { DesmarcarLinhasAcao } from '../../../../armazem/redutores/contatos'

// componente: efetua desestruturacao das propriedades passadas
const CSTabLinha = ({ Nome, Email, Contato, Selecionado, id }: ClsContato) => {
  // cria estados
  const [flgSel, setFlgSel] = useState(Selecionado)
  // cria um despacho
  const despacho = useDispatch()

  // funcoes
  const MarcarDesmarcar = () => {
    setFlgSel(!flgSel)
    // manda p/ redux gerenciar o estado
    despacho(DesmarcarLinhasAcao(!flgSel))
  }

  // def retorno
  return (
    <G.CSTabLinha>
      <td>{Nome}</td>
      <td>{Email}</td>
      <td>{Contato}</td>
      <td>
        <input
          type="checkbox"
          checked={flgSel}
          onChange={MarcarDesmarcar}
        ></input>
      </td>
    </G.CSTabLinha>
  )
}

// exportacoes
export default CSTabLinha

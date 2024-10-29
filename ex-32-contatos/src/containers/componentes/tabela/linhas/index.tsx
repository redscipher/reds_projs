// importacoes
import * as G from '../../../../globais/globais'
import ClsContato from '../../../../globais/classes'
import { useDispatch } from 'react-redux'
import { DesmarcarLinhasAcao } from '../../../../armazem/redutores/contatos'

// componente: efetua desestruturacao das propriedades passadas
const CSTabLinha = ({ Nome, Email, Contato, Selecionado, id }: ClsContato) => {
  // cria um despacho
  const despacho = useDispatch()

  // funcoes
  const MarcarDesmarcar = () => {
    // manda p/ redux gerenciar o estado
    despacho(DesmarcarLinhasAcao({ id, checado: !Selecionado }))
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
          checked={Selecionado}
          onChange={MarcarDesmarcar}
        ></input>
      </td>
    </G.CSTabLinha>
  )
}

// exportacoes
export default CSTabLinha

// importacoes
import styled from 'styled-components'
import { darken } from 'polished'
import Cores from '../../../estilos/cores'

// estilos
const CSTabela = styled.table.attrs({
  className: 'table table-hover' // aplica classes bootstrap
})`
  /* estilos extras */
  font-family: 'Playfair Display', serif;

  /* elementos */
  th,
  td {
    color: ${Cores.cinza};
    background-color: ${Cores.verdeClaro};
  }
`

const CSTabCab = styled.thead`
  color: ${Cores.pretoSombra};

  /* elementos */
  th {
    /* aplica uma sombra */
    box-shadow: 0 8px 8px ${Cores.pretoSombra};
  }

  /* pseudo-elementos */
  th:first-child {
    border-top-left-radius: 16px;
  }

  th:last-child {
    border-top-right-radius: 16px;
  }
`

const CSTabRoda = styled.tfoot`
  text-align: center;

  /* elementos */
  td {
    /* aplica uma sombra */
    box-shadow: 0 8px 8px ${Cores.pretoSombra};
  }

  /* pseudo-elementos */
  td:first-child {
    border-bottom-left-radius: 16px;
  }

  td:last-child {
    border-bottom-right-radius: 16px;
  }
`

const CSTabLinha = styled.tr`
  border: none;
`

const CSTabCorpo = styled.tbody`
  td {
    color: ${Cores.branco};
  }

  /* estado: mouse em cima */
  &:hover {
    /* escura cor um pouco */
    background-color: ${darken(0.9, Cores.verdeClaro)};
    /* posicao: passar impressao flutuante */
    transform: translateY(-3px);
  }
`

// exportacoes
export { CSTabela, CSTabCab, CSTabRoda, CSTabCorpo, CSTabLinha }

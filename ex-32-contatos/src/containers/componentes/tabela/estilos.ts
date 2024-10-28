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
    color: #c2c2c2;
    background-color: ${Cores.verdeClaro};
  }
`

const CSTabCab = styled.thead`
  color: ${Cores.pretoSombra};
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
  &:hover {
    background-color: ${darken(0.5, Cores.verdeClaro)};
  }
`

// exportacoes
export { CSTabela, CSTabCab, CSTabRoda, CSTabCorpo, CSTabLinha }

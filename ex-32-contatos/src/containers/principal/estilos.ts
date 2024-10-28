// importacoes
import styled from 'styled-components'
import Cores from '../../estilos/cores'
import { darken } from 'polished'
import { Link } from 'react-router-dom'
import { CSBotao } from '../../estilos/globais'

// estilos
const SCPrincipal = styled.main`
  /* exibicao */
  display: flex;
  flex-wrap: wrap;
  /* margens */
  padding-top: 8px;
  margin-top: 16px;
`

const CSBotaoDel = styled(CSBotao)`
  background-color: ${darken(0.35, Cores.laranja)};
  color: ${Cores.laranja};
  border-color: ${Cores.laranja};

  &:hover {
    color: ${darken(0.3, Cores.laranja)};
    border-color: ${darken(0.3, Cores.laranja)};
  }
`

const CSBotaoAdc = styled(CSBotao).attrs({
  as: Link
})`
  background-color: ${darken(0.2, Cores.verde)};
  color: ${Cores.verde};
  border-color: ${Cores.verde};

  &:hover {
    color: ${darken(0.2, Cores.verde)};
    border-color: ${darken(0.2, Cores.verde)};
  }
`

// exportacoes
export { SCPrincipal, CSBotaoDel, CSBotaoAdc }

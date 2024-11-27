// importacoes
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CSBotao } from '../../globais/globais'

// estilos
const SCPrincipal = styled.main`
  /* exibicao */
  display: flex;
  flex-wrap: wrap;
  /* margens */
  padding-top: 8px;
  margin-top: 16px;
`

const CSBotaoEditar = styled(CSBotao).attrs({
  as: Link
})``

// exportacoes
export { SCPrincipal, CSBotaoEditar }

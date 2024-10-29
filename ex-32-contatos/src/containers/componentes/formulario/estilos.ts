// importacao
import styled from 'styled-components'
import { CSBotaoAdc, CSBotaoDel } from '../../../globais/globais'
// import { Link } from 'react-router-dom'

// estilos
const CSBotaoSalvar = styled(CSBotaoAdc).attrs({
  type: 'submit'
})`
  width: 45%;
`

const CSBotaoCancel = styled(CSBotaoDel)`
  width: 45%;
`

// exportacoes
export { CSBotaoSalvar, CSBotaoCancel }

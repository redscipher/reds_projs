// importacoes
import styled from 'styled-components'
import Cores from '../../globais/cores'

// estilos
const SCCabecalho = styled.header.attrs({
  className: 'col-12' // aplica classes bootstrap
})`
  /* exibicao */
  display: flex;
  justify-content: space-between;
  /* margens */
  padding-top: 8px;
  margin-bottom: 16px;
  /* cores */
  background-image: linear-gradient(
    to top right,
    #fafafa 0%,
    #dedde4 19%,
    #737482 38%,
    #45465e 58%,
    #7e7a90 78%,
    #b3b1be 100%
  );
  color: #192a56;
  /* aplica uma sombra */
  box-shadow: 0 8px 8px ${Cores.pretoSombra};
  /* fonte */
  font-family: 'Danfo', serif;
`

const CSTitulo = styled.h1`
  font-size: 32px;
  letter-spacing: 2px;
  /* margens */
  padding: 8px;
`

// exportacoes
export { SCCabecalho, CSTitulo }

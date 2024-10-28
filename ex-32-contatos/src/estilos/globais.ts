// importacoes
import { darken } from 'polished'
import styled, { createGlobalStyle } from 'styled-components'
import Cores from './cores'
import { Link } from 'react-router-dom'

// cria estilizacao global
const CSSGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    /* cor gradiente de fundo */
    background-image: linear-gradient(to top left, #fafafa 0%, #dedde4 19%, #737482 38%, #45465e 58%, #7e7a90 78%, #b3b1be 100%);
    /* nao repete imagem */
    background-repeat: no-repeat;
    background-size: cover;
    /* ocupa toda tela */
    height: 100vh;
  };
`

const CSBotao = styled.button.attrs({
  className: 'btn my-1'
})`
  /* extras */
  background-color: ${darken(0.35, Cores.cinza)};
  color: ${Cores.cinza};
  border-color: ${Cores.cinza};
  width: 100%;
  cursor: pointer;

  &:hover {
    color: ${darken(0.3, Cores.cinza)};
    border-color: ${darken(0.3, Cores.cinza)};
    /* posicao: passar impressao flutuante */
    transform: translateY(-3px);
  }
`

// exportacoes
export default CSSGlobal
export { CSBotao }

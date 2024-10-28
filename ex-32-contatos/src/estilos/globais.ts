// importacoes
import { createGlobalStyle } from 'styled-components'

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

// exportacoes
export default CSSGlobal

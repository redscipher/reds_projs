/* eslint-disable @typescript-eslint/no-unused-vars */

// importacoes
import React from 'react'
import styled from 'styled-components'

// cria um tipo p/ os elementos
type BotaoProps = {
  principal: boolean
  fontSize?: string
}

// cria um elemento com styled: passa o tipo do elemento entre '<>'
const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`
// cria um elemento styled apartir de outro elemento styled
const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  // executa estilazacao de um elemento interno: = sass/less
  span {
    text-decoration: line-through;
  }
`

function teste() {
  return (
    <>
      <h1>Ola</h1>
      {/* cria atributos p/ elemento personalizado */}
      <Botao fontSize="19px" principal>
        Clique aqui
      </Botao>
      <Botao principal={false}>Cancelar</Botao>
      {/* atributo 'as'='tag_html' */}
      <BotaoPerigo as="a" principal>
        {/* cria um elemento interno dentro do elemento personalizado */}
        <span>Nao clique aqui</span>
      </BotaoPerigo>
    </>
  )
}

export default teste

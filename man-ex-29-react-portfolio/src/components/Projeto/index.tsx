import { P } from '../Paragrafo/styles'
import Titulo from '../Titulo'
import { Card, LinkBotao } from './styles'

const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de Tarefas</Titulo>
    <P tipo="secondario">Lista de Tarefas Feitas com VueJS</P>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto

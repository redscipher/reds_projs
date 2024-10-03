import { P } from './styles'

export type Props = {
  children: string
  fontSize?: number
  tipo?: 'principal' | 'secondario'
}

const Paragrafo = ({ children, tipo = 'principal' }: Props) => (
  <P tipo={tipo}>{children}</P>
)

export default Paragrafo

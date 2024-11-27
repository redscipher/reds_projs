// importacoes
import ClsContato from './classes'

// tipos
type TContatos = {
  itens: ClsContato[]
  flgEditando?: boolean
}

type PropsAdicao = {
  contato: ClsContato
  FlgAdicionado: boolean
}

// exportacoes
export type { TContatos, PropsAdicao }

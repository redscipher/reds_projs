// importacoes
import ClsContato from './classes'

// tipos
type TContatos = {
  itens: ClsContato[]
}

type PropsAdicao = {
  contato: ClsContato
  FlgAdicionado: boolean
}

// exportacoes
export type { TContatos, PropsAdicao }

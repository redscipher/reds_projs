// importacoes
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ClsContato from '../../globais/clsContatos'
import { DesmarcarLinhas } from '../../funcoes/funcoesComuns'

// tipo
type TContatos = {
  itens: ClsContato[]
}

// objeto contatos
const contatos: TContatos = {
  itens: [
    {
      id: 1,
      Nome: 'Teste',
      Email: 'email@hotmail.com',
      Contato: '34999999999',
      Selecionado: false
    },
    {
      id: 2,
      Nome: 'Testes2',
      Email: 'email@gmail.com',
      Contato: '34988888888',
      Selecionado: false
    }
  ]
}

// cria um 'slice'/'actionCreator' que controla as 'actions'
const contatosFatia = createSlice({
  name: 'contatos',
  initialState: contatos,
  // acoes
  reducers: {
    // nome_redutor: funcao
    DesmarcarLinhasAcao: (estado, acao: PayloadAction<boolean>) => {
      return DesmarcarLinhas(estado, acao, contatos.itens)
    }
  }
})

// exportacoes : redutor
export default contatosFatia.reducer
// acoes
export const { DesmarcarLinhasAcao } = contatosFatia.actions

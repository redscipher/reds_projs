// importacoes
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  DesmarcarLinhas,
  AdicionarContato,
  RemoverContato,
  EditarContato
} from '../../funcoes/funcoesComuns'
import { PropsAdicao, TContatos } from '../../globais/tipos'
import ClsContato from '../../globais/classes'

// objeto contatos
const contatos: TContatos = {
  itens: []
}

// cria um 'slice'/'actionCreator' que controla as 'actions'
const contatosFatia = createSlice({
  name: 'contatos',
  initialState: contatos,
  // acoes
  reducers: {
    // nome_redutor: funcao
    DesmarcarLinhasAcao: (
      estado,
      acao: PayloadAction<{ id: number; checado: boolean }>
    ) => {
      return DesmarcarLinhas(estado, acao)
    },
    AdicionarLinhaAcao: (estado, acao: PayloadAction<PropsAdicao>) => {
      return AdicionarContato(estado, acao)
    },
    RemoverLinhaAcao: (estado) => {
      return RemoverContato(estado)
    },
    EditarLinhaAcao: (estado, acao: PayloadAction<ClsContato>) => {
      return EditarContato(estado, acao)
    }
  }
})

// exportacoes : redutor
export default contatosFatia.reducer
// acoes
export const {
  DesmarcarLinhasAcao,
  AdicionarLinhaAcao,
  RemoverLinhaAcao,
  EditarLinhaAcao
} = contatosFatia.actions

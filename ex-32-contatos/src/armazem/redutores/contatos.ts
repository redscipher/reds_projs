// importacoes
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  DesmarcarLinhas,
  AdicionarContato,
  RemoverContato
} from '../../funcoes/funcoesComuns'
import { PropsAdicao, TContatos } from '../../globais/tipos'

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
    }
  }
})

// exportacoes : redutor
export default contatosFatia.reducer
// acoes
export const { DesmarcarLinhasAcao, AdicionarLinhaAcao, RemoverLinhaAcao } =
  contatosFatia.actions

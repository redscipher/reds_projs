import { PayloadAction } from '@reduxjs/toolkit'
import { WritableDraft } from 'immer'
import { TContatos } from '../globais/tipos'

// funcoes
function DesmarcarLinhas(
  estado: WritableDraft<TContatos>,
  acao: PayloadAction<{ id: number; checado: boolean }>
): void {
  console.log(estado)
  console.log(acao.payload)
  // loop p/ desmarcar demais itens
  estado.itens.map((item, idItem) => {
    if (item.id !== acao.payload.id) {
      estado.itens[idItem].Selecionado = false
    }
  })
}

// exporta funcao
export { DesmarcarLinhas }

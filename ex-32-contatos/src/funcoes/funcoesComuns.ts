import { PayloadAction } from '@reduxjs/toolkit'
import { TContatos } from '../globais/tipos'

// funcoes
function DesmarcarLinhas(
  estado: TContatos,
  acao: PayloadAction<{ id: number; checado: boolean }>
): void {
  // loop p/ desmarcar demais itens
  estado.itens.map((item) => {
    if (item.id !== acao.payload.id) {
      item.Selecionado = false
    } else {
      item.Selecionado = acao.payload.checado
    }
  })
}

// exporta funcao
export { DesmarcarLinhas }

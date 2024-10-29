import { PayloadAction } from '@reduxjs/toolkit'
import ClsContato from '../globais/clsContatos'

// funcoes
function DesmarcarLinhas(
  estado: unknown,
  acao: PayloadAction<boolean>,
  itens: ClsContato[]
): void {
  console.log(estado)
  console.log(acao)
  console.log(itens)
}

// exporta funcao
export { DesmarcarLinhas }

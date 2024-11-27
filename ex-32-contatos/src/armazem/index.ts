// importacoes
import { configureStore } from '@reduxjs/toolkit'
// redutores
import contatosRedutor from './redutores/contatos'

// configura o 'store'
const armazem = configureStore({
  // redutores
  reducer: {
    contatos: contatosRedutor
  }
})

// exportacoes
export default armazem
// exporta tipo de dado passado p/ o 'store'
export type RootReducer = ReturnType<typeof armazem.getState>

// importacoes
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootReducer } from '../armazem'
import ClsContato from '../globais/classes'
import { PayloadAction } from '@reduxjs/toolkit'

const FuncoesComuns = () => {
  // objeto rotas
  const navegar = useNavigate()

  // funcoes
  function NavegarEntreRotas(StrRota: string): void {
    navegar(StrRota)
  }

  //== def retorno: funcoes
  return {
    NavegarEntreRotas
  }
}

// exportando objeto principal que contem todas as funcoes
export default FuncoesComuns

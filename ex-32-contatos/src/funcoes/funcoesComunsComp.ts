// importacoes
import { useNavigate } from 'react-router-dom'

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

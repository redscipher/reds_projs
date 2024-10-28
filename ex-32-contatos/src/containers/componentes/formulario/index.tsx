// importacoes
import { CSBotao } from '../../../estilos/globais'
import FuncoesComuns from '../../../funcoes/funcoesComuns'

// componente
const CRFormulario = () => {
  // funcoes importadas
  const { NavegarEntreRotas } = FuncoesComuns()

  // def retorno
  return (
    <>
      <div className="container">
        <div className="row">
          <CSBotao type="button" onClick={() => NavegarEntreRotas('/')}>
            Voltar
          </CSBotao>
        </div>
        <div className="row">
          <div className="col-12">
            <h1>Formulario</h1>
          </div>
        </div>
      </div>
    </>
  )
}

// exportacoes
export default CRFormulario

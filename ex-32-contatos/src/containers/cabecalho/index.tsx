// importacoes
import * as E from './estilos'

// componente
const CRCabecalho = () => {
  // def retorno
  return (
    <div className="container-fluid">
      <div className="row flex-grow-1">
        <E.SCCabecalho>
          <div className="container">
            <E.CSTitulo>Agenda de contatos...</E.CSTitulo>
          </div>
        </E.SCCabecalho>
      </div>
    </div>
  )
}

// exportacoes
export default CRCabecalho

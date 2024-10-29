// importacoes
import * as E from './estilos'
import { CSBotao } from '../../../globais/globais'
import FuncoesComuns from '../../../funcoes/funcoesComunsComp'

// componente
const CRFormulario = () => {
  // funcoes importadas
  const { NavegarEntreRotas } = FuncoesComuns()

  // def retorno
  return (
    <>
      <div className="container">
        <div className="row col-2 offset-2 mb-3">
          <CSBotao type="button" onClick={() => NavegarEntreRotas('/')}>
            Voltar
          </CSBotao>
        </div>
        <div className="row">
          <div className="col-8 offset-2">
            <form action="" className="needs-validation">
              {/* nome */}
              <div className="form-floating mb-3 has-validation">
                <input
                  type="text"
                  className="form-control"
                  id="id-nome"
                  placeholder="Nome completo"
                  required
                />
                <label htmlFor="id-nome">Nome completo</label>
                <div className="valid-feedback">Certo!</div>
                <div className="invalid-feedback">Incorreto!</div>
              </div>
              {/* email */}
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="id-email"
                  placeholder="email@exemplo.com"
                  required
                />
                <label htmlFor="id-email">E-mail</label>
              </div>
              {/* contato */}
              <div className="form-floating mb-3">
                <input
                  type="tel"
                  className="form-control"
                  id="id-contato"
                  placeholder="(DD) 9xxxx-xxxx"
                  required
                />
                <label htmlFor="id-contato">Contato</label>
              </div>
              {/* botoes */}
              <div className="w-100 d-flex justify-content-between">
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
                {/* <E.CSBotaoSalvar to="/cadastro">Salvar</E.CSBotaoSalvar> */}
                {/* <E.CSBotaoCancel type="button">Cancelar</E.CSBotaoCancel> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

// exportacoes
export default CRFormulario

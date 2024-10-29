// importacoes
import * as E from './estilos'
import { CSBotao } from '../../../globais/globais'
import FuncoesComuns from '../../../funcoes/funcoesComunsComp'
// jquery
import $ from 'jquery'

// componente
const CRFormulario: React.FC = () => {
  // funcoes importadas
  const { NavegarEntreRotas } = FuncoesComuns()

  // funcoes
  const validarEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const validarTelefone = (telefone: string): boolean => {
    // Regex para telefones brasileiros no formato (XX) 9XXXX-XXXX
    const regex = /^\d{2}\d{5}\d{4}$/
    return regex.test(telefone)
  }

  const SubmeterForm = () => {
    // busca o formulario
    const entradaNome: string = $('#id-nome').val() as string
    const entradaEmail: string = $('#id-email').val() as string
    const entradaContato: string = $('#id-contato').val() as string
    // variavel
    let flgValido: boolean = false
    // validacao
    if (entradaNome == '') {
      alert('Aviso: Preencher o campo nome.')
    } else if (entradaEmail == '') {
      alert('Aviso: Preencher o campo e-mail.')
    } else if (entradaContato == '') {
      alert('Aviso: Preencher o campo contato.')
    } else {
      flgValido = true
    }
    // validacao
    if (flgValido) {
      // resete
      flgValido = false
      // valida dados
      if (!validarEmail(entradaEmail)) {
        alert('Aviso: Valor informado no campo e-mail não é um e-mail.')
      } else if (!validarTelefone(entradaContato)) {
        alert('Aviso: Valor informado no campo contato não é válido.')
      } else {
        flgValido = true
      }
      // validacao
      if (flgValido) {
        NavegarEntreRotas('/')
      }
    }
  }

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
                <div className="valid-feedback text-white">Certo!</div>
                <div className="invalid-feedback text-white">Incorreto!</div>
              </div>
              {/* email */}
              <div className="form-floating mb-3 has-validation">
                <input
                  type="email"
                  className="form-control"
                  id="id-email"
                  placeholder="email@exemplo.com"
                  required
                />
                <label htmlFor="id-email">E-mail</label>
                <div className="valid-feedback text-white">Certo!</div>
                <div className="invalid-feedback text-white">Incorreto!</div>
              </div>
              {/* contato */}
              <div className="form-floating mb-3 has-validation">
                <input
                  type="tel"
                  className="form-control"
                  id="id-contato"
                  placeholder="(DD) 9xxxx-xxxx"
                  required
                />
                <label htmlFor="id-contato">
                  Contato &apos;digite somente numeros&apos;
                </label>
                <div className="valid-feedback text-white">Certo!</div>
                <div className="invalid-feedback text-white">Incorreto!</div>
              </div>
              {/* botoes */}
              <div className="w-100 d-flex justify-content-between">
                <E.CSBotaoSalvar to="" onClick={SubmeterForm}>
                  Salvar
                </E.CSBotaoSalvar>
                <E.CSBotaoCancel
                  type="button"
                  onClick={() => NavegarEntreRotas('/')}
                >
                  Cancelar
                </E.CSBotaoCancel>
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

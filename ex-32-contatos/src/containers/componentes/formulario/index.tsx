// importacoes
import * as E from './estilos'
import { CSBotao } from '../../../globais/globais'
import FuncoesComuns from '../../../funcoes/funcoesComunsComp'
// jquery
import $ from 'jquery'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  AdicionarLinhaAcao,
  EditarLinhaAcao
} from '../../../armazem/redutores/contatos'
import { PropsAdicao } from '../../../globais/tipos'
import ClsContato from '../../../globais/classes'
import { RootReducer } from '../../../armazem'

// componente
const CRFormulario: React.FC = () => {
  // estados p/ controlar os valores digitados
  const [strNome, setStrNome] = useState('')
  const [strEmail, setStrEmail] = useState('')
  const [strContato, setStrContato] = useState('')
  // efeitos
  useEffect(() => {
    InicializaEdicao()
  }, [])
  // busca estado atual de variavel do conjunto de dados dos
  // contatos que controla acao sendo executada: inserindo ou editando
  const { itens, flgEditando } = useSelector(
    (estado: RootReducer) => estado.contatos
  )
  // despacho
  const despacho = useDispatch()

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

  const InicializaEdicao = () => {
    // comportamento
    if (flgEditando) {
      // verifica id de contato selecionado
      const itemEdicao = itens.find((item) => item.Selecionado === true)
      // validacao
      if (itemEdicao) {
        // set valores
        setStrNome(itemEdicao.Nome)
        setStrEmail(itemEdicao.Email)
        setStrContato(itemEdicao.Contato)
      } else {
        NavegarEntreRotas('/')
      }
    }
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
        // variavel temp
        let flgVoltaRota: boolean = false
        // verifica se esta editando ou inserindo
        if (flgEditando) {
          // linha atual
          const linhaAtual: ClsContato = {
            id: 0,
            Nome: strNome,
            Email: strEmail,
            Contato: strContato,
            Selecionado: false
          }
          // edita linha + volta rota
          despacho(EditarLinhaAcao(linhaAtual))
          flgVoltaRota = true
        } else {
          // nova linha
          const linha: PropsAdicao = {
            contato: {
              id: 0,
              Nome: strNome,
              Email: strEmail,
              Contato: strContato,
              Selecionado: false
            },
            FlgAdicionado: false
          }
          // adciona linha
          despacho(AdicionarLinhaAcao(linha))
          // validacao
          flgVoltaRota = linha.FlgAdicionado
        }
        // validacao + volta p/ rota anterior
        if (flgVoltaRota) NavegarEntreRotas('/')
      }
    }
  }

  // def retorno
  return (
    <>
      <div className="container">
        <div className="row col-md-2 col-10 offset-md-2 offset-1 mb-3">
          <CSBotao type="button" onClick={() => NavegarEntreRotas('/')}>
            Voltar
          </CSBotao>
        </div>
        <div className="row">
          <div className="col-md-8 col-sm-12 offset-md-2">
            <form action="" className="needs-validation">
              {/* nome */}
              <div className="form-floating mb-3 has-validation">
                <input
                  type="text"
                  className="form-control"
                  id="id-nome"
                  placeholder="Nome completo"
                  value={strNome}
                  required
                  onChange={(e) => setStrNome(e.target.value)}
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
                  value={strEmail}
                  required
                  onChange={(e) => setStrEmail(e.target.value)}
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
                  value={strContato}
                  required
                  onChange={(e) => setStrContato(e.target.value)}
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

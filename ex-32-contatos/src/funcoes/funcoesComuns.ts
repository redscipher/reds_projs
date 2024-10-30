import { PayloadAction } from '@reduxjs/toolkit'
import { TContatos, PropsAdicao } from '../globais/tipos'
import ClsContato from '../globais/classes'

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

function AdicionarContato(
  estado: TContatos,
  acao: PayloadAction<PropsAdicao>
): void {
  // verifica se item ja existe nos contatos
  const flgExiste = estado.itens.find(
    (item) =>
      item.Nome.toLocaleLowerCase() ===
        acao.payload.contato.Nome.toLocaleLowerCase() ||
      item.Email.toLocaleLowerCase() ===
        acao.payload.contato.Email.toLocaleLowerCase() ||
      item.Contato.toLocaleLowerCase() ===
        acao.payload.contato.Contato.toLocaleLowerCase()
  )
  // validacao
  if (flgExiste) {
    alert('Este contato já está cadastrado.')
    acao.payload.FlgAdicionado = false
  } else {
    // set novo id
    acao.payload.contato.id = estado.itens.length + 1
    // adiciona novo item
    estado.itens.push(acao.payload.contato)
    acao.payload.FlgAdicionado = true
  }
}

function RemoverContato(estado: TContatos): void {
  // busca o index do item
  const itemDel = estado.itens.find((item) => {
    if (item.Selecionado === true) return item
  })
  // remove item
  if (itemDel) {
    estado.itens = [...estado.itens.filter((item) => item !== itemDel)]
  } else {
    alert('Aviso: Marque o checkbox da linha que deseja remover.')
  }
}

function EditarContato(
  estado: TContatos,
  acao: PayloadAction<ClsContato>
): void {
  // busca o index do item
  const itemEdicao = estado.itens.find((item) => {
    if (item.Selecionado === true) return item
  })
  // remove item
  if (itemEdicao) {
    // efetua edicao
    const idx = estado.itens.findIndex((item) => item === itemEdicao)
    // altera contato
    estado.itens[idx] = acao.payload
    // desmarca contato
    estado.itens[idx].Selecionado = false
  } else {
    alert('Aviso: Marque o checkbox da linha que deseja remover.')
  }
}

// exporta funcao
export { DesmarcarLinhas, AdicionarContato, RemoverContato, EditarContato }

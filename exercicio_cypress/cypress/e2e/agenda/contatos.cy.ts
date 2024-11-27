/// <reference types="cypress" />
// importacao do cypres

// funcoes
const preencherValores = (nome: string, email: string, contato: string) => {
    cy.get('input[type="text"]').clear().type(nome)
    cy.get('input[type="email"]').clear().type(email)
    cy.get('input[type="tel"]').clear().type(contato)
}

function validaUltimoElemento(nome: string) {
    // expectativa
    cy.get('.sc-eDDNvR:last-child li').should('contain', nome)
    // tira print
    cy.screenshot()
}

// suite: testar fucionalidades
describe('teste p/ manipulacao da agenda', () => {
    // executa chamada ao site antes de cada teste
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.wait(5000)
    })

    // teste 1
    it('teste adicionando contato', () => {
        // inserindo input
        preencherValores('fulano', 'fulano@email.com', '34988888888')
        // efetuando click
        cy.get('.adicionar').click()
        // validacao
        validaUltimoElemento('fulano')
    })

    // // teste 2
    it('teste editando contato', () => {
        // click p/ comecar edicao contato
        cy.get('.edit').last().click()
        // inserindo input
        preencherValores('fulano editado', 'fulanoeditado@email.com', '34999999999')
        // efetuando click
        cy.get('.alterar').click()
        // validacao
        validaUltimoElemento('fulano editado')
    })

    // // teste 3
    it('teste removendo contato', () => {
        // pega quantos itens tem na lista
        cy.get('.sc-eDDNvR').its('length').then((count) => {
            const numeroDeItens = count
            // executa clique
            cy.get('.delete').last().click()
            // expectativa
            cy.get('.sc-eDDNvR').should('have.length', numeroDeItens - 1)
            // tira print
            cy.screenshot()
        })
    })
})
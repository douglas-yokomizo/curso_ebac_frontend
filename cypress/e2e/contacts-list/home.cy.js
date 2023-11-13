/// <reference types="cypress" />

describe('Testes para features da lista de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    });

    it('Deve adicionar um contato', () => {
        cy.get('input[type="text"]').type('Douglas')
        cy.get('input[type="email"]').type('Douglas@teste.com')
        cy.get('input[type="tel"]').type('11912345678')
        cy.get('.adicionar').click()
        cy.get('.sc-beqWaB').should('contain', 'Douglas')
    });

    it('Deve editar um contato', () => {
        cy.get('.edit').first().click()
        cy.get('input[type="text"]').clear().type('Editado')
        cy.get('input[type="email"]').clear().type('Editado@teste.com')
        cy.get('input[type="tel"]').clear().type('11998765432')
        cy.get('.alterar').click()
        cy.get('.sc-eDDNvR').first().should('contain', 'Editado')
    })

    it('Deve excluir um contato', () => {

        cy.get('.contato').its('length').then((contactsQtd) => {

            cy.get('.delete').first().click()

            cy.get('.contato').its('length').should('eq', contactsQtd - 1)

        })

    })
})
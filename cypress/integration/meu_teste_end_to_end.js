describe('Teste End-to-End', () => {
    it('Meu Primeiro Teste', () => {
        // abre o site
        cy.visit('http://localhost:5000/')
        
        // Verifica se existe o livro desejado
        cy.get('[data-id=3]').should('contain.text', 'Design Patterns')
    })
  })


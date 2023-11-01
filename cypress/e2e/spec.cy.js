describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.url().should('not.include' , 'yutube')
    cy.viewport(1920, 1080)
    cy.get('#chips #text').should('have.length.greaterThan', 3)
  
  })
})
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.yelo.az/az/individuals/loans/consumer-loan/')
    cy.viewport(1920, 1080)
    // cy.fixture('logIn').then((uu)=>{
    //   cy.get('#loginMsisdn').type(uu.name)
    //   cy.get('#loginPw').click().type(uu.password)
    //   cy.log(uu);
    // })

    // cy.wait(5000);
    // cy.get('a').contains("EN").click();
    // cy.get('a').contains("RU").click();
    // cy.log(Cypress.Commands.add)
    cy.abbas(".fs_bottom" , "Sifariş et")
    // cy.login("a", "Biznes")
    // cy.get('.fs_bottom').as('Sifariş et')
  
  
  })
})
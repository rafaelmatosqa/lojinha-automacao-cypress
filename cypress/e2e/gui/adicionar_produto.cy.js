describe('Teste de Adição de Produto na Lojinha', () => {
  beforeEach(() => {
    cy.fixture('product').as('product');
  });

  it('Deve logar e adicionar um novo produto', function () {
    // Realiza o login
    cy.login();

    // Valida o texto de boas-vindas
    cy.contains(`Boas vindas, ${Cypress.env("USERNAME").charAt(0).toUpperCase() + Cypress.env("USERNAME").slice(1)}!`).should('be.visible');

    // Navega para a tela de adicionar produto
    cy.get('.waves-effect').click();

    // Preenche o formulário do produto
    cy.get('#produtonome').type(this.product.nome);
    cy.get('#produtovalor').type(this.product.valor);
    cy.get('#produtocores').type(this.product.cor);
    cy.get('.btn').contains('Salvar').click();

    // Valida a mensagem de sucesso
    cy.get('.toast')
      .should('be.visible')
      .and('have.text', 'Produto adicionado com sucesso');

    // Retorna à lista de produtos
    cy.get(':nth-child(4) > .grey').click();

    // Verifica se o produto está na lista
    cy.contains(this.product.nome).should('be.visible');
  });
});
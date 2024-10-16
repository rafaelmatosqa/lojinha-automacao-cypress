describe('Teste de Adição de Produto na Lojinha com erro', () => {
    beforeEach(() => {
      cy.fixture('product').as('product');
    });
  
    it('Deve logar e adicionar um novo produto com valor acima do permitido', function () {
      // Realiza o login
      cy.login();
  
      // Valida o texto de boas-vindas
      cy.contains(`Boas vindas, ${Cypress.env("USERNAME").charAt(0).toUpperCase() + Cypress.env("USERNAME").slice(1)}!`).should('be.visible');
  
      // Navega para a tela de adicionar produto
      cy.get('.waves-effect').click();
  
      // Preenche o formulário do produto
      cy.get('#produtonome').type(this.product.nome2);
      cy.get('#produtovalor').type(this.product.valor2);
      cy.get('#produtocores').type(this.product.cor2);
      cy.get('.btn').contains('Salvar').click();
  
      // Valida a mensagem de erro
      cy.get('.toast')
        .should('be.visible')
        .and('have.text', 'O valor do produto deve estar entre R$ 0,01 e R$ 7.000,00');

    });
  });
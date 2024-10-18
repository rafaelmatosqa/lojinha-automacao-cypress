describe('Teste de Exclusão de Produto na Lojinha', () => {
    beforeEach(() => {
      cy.fixture('product').as('product'); // Carrega todos os produtos do fixture
  
    });
  
    it('Deve logar e excluir um produto existente', function () {
      // Realiza o login
      cy.login();
  
      // Valida o texto de boas-vindas
      cy.contains(`Boas vindas, ${Cypress.env("USERNAME").charAt(0).toUpperCase() + Cypress.env("USERNAME").slice(1)}!`).should('be.visible');
  
      // Verifica se o produto a ser excluído está na lista
      cy.contains(this.product.nome).should('be.visible');
  
      // Exclui o primeiro item da lista
      cy.get('li[class="collection-item avatar"] > a').eq(0).should('be.visible').click();
  
      // Confirma a exclusão, se houver um modal ou alerta
      cy.on('window:confirm', () => true); // Aceita a confirmação se um alerta aparecer
  
      // Valida a mensagem de sucesso
      cy.get('.toast')
        .should('be.visible')
        .and('have.text', 'Produto removido com sucesso');
  
       });
  });
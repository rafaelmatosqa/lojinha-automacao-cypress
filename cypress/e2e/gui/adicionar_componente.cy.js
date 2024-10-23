describe('Teste de Adição de Produto na Lojinha', () => {
    beforeEach(() => {
      cy.fixture('product').as('product');
    });
  
    it('Deve logar e adicionar um novo produto', function () {
      // Realiza o login
      cy.login();
  
      // Valida o texto de boas-vindas
      cy.contains(`Boas vindas, Desafio3!`).should('be.visible');
  
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
  
      // Acessa modal de adição de componente
      cy.get(':nth-child(2) > .waves-effect').click();

      //Valida título na modal
      cy.get('.modal-content > h4').should('be.visible').and('have.text','Adicionar Componente ao Produto');
      cy.get('#componentenomeadicionar').type(this.product.nomeComponente);
      cy.get('#componentequantidadeadicionar').type(this.product.qntComponente);
      cy.get('.btn').contains('Salvar Componente').click();

      // Valida a mensagem de sucesso
      cy.get('.toast')
        .should('be.visible')
        .and('have.text', 'Componente de produto adicionado com sucesso');

      // Valida a adição do componente, nome e quantidade
      cy.get('.title').should('be.visible').and('have.text','Lojinha Parafuso');
      cy.get('p > i').should('be.visible').and('have.text',this.product.qntComponente + ' unidades');
    });
  });
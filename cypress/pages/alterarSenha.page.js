class AlterarSenha {
  // Pode ser feito por "fluxo": elementos + ações

  acessarCorreios() {
    cy.visit("https://meucorreios.correios.com.br/app/index.php");
  }

  acessarLogin() {
    cy.get(".primario").click();
  }

  efetuarLogin() {
    cy.get("#username").type("12617901467");
    cy.get("#password").type("Barbosa@123");
    cy.get(".primario").click();
  }
  paginaAlterarSenha() {
    cy.get(".senha").click();
  }

  preencherCamposValidos() {
    cy.get("#senha-atual").type("Barbosa@123");
    cy.get("#nova-senha").type("Barbosa@123");
    cy.get("#nova-senha2").type("Barbosa@123");
  }
  confirmarAlteracao() {
    cy.get("#b-salva").click();
  }

    confirmarSenhaAlterada() {
      cy.get(".msg").should("be.visible").and("contain", "Sucesso!");
    }
}

export const alterarSenha = new AlterarSenha();

class LoginInvalido {
  // Pode ser feito por "fluxo": elementos + ações

  acessarCorreios() {
    cy.visit("https://cas.correios.com.br/login");
  }

  digitarUsuario2() {
    cy.get("#username").type("12345678");
  }

  digitarSenha2() {
    cy.get("#password").type("Barbosa@123");
  }

  confirmarLogin2() {
    cy.get(".primario").click();
  }

   invalidarLogin2() {
     cy.get(".msg")
       .should("be.visible")
       .and("contain", "Usuário ou senha inválidos. ");
   }
}

export const loginInvalido = new LoginInvalido();

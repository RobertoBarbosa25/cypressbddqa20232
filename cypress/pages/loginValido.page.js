class LoginValido {
    // Pode ser feito por "fluxo": elementos + ações
  
    acessarCorreios() {
      cy.visit("https://cas.correios.com.br/login");
    }
  
    digitarUsuario2() {
      cy.get("#username").type("12617901467");
    }
  
    digitarSenha2() {
      cy.get("#password").type("Barbosa@123");
    }
  
    confirmarLogin2() {
      cy.get(".primario").click();
    }
  
      ValidarLogin2() {
        cy.get('h2')
          .should("be.visible")
          .and("contain", "Sucesso ao se logar");
      }
  }
  
  export const loginValido = new LoginValido();
  
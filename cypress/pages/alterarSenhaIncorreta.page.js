class AlterarSenhaIncorreta {
    // Pode ser feito por "fluxo": elementos + ações

    acessarCorreios() {
        cy.visit('https://meucorreios.correios.com.br/app/index.php')
    }

    acessarLogin(){
        cy.get('.primario').click();
    }

    efetuarLogin(){
        cy.get('#username').type('12617901467')
        cy.get('#password').type('Barbosa@123')
        cy.get('.primario').click()
    }
    paginaAlterarSenha(){
        cy.get('.senha').click();
    }

    preencherCampos(){
        cy.get('#senha-atual').type('senhaincorreta')
        cy.get('#nova-senha').type('senhaincorreta2')
        cy.get('#nova-senha2').type('senhaincorreta2')
    }
    confirmarAlteracao(){
        cy.get('#b-salva').click();
    }

    confirmarSenhaAtualInvalida(){
        cy.get(".msg")
       .should("be.visible")
       .and("contain", "senha atual inválida");
    }

    
}

export const alterarSenhaIncorreta = new AlterarSenhaIncorreta()
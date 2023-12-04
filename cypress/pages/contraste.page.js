class ContrastePage {
    // Pode ser feito por "fluxo": elementos + ações

    acessarCorreios() {
        cy.visit('https://rastreamento.correios.com.br/app/index.php')
    }

    clicarAcessibilidade() {
        cy.get('#acessibilidade > [tabindex="1"]').click();
    }

    clicarAltoContraste() {
        cy.get('.contraste').click();
    }

    validarClassContrast() {
        cy.get('body').should('have.class', 'contrast');
    }


}

export const contrastePage = new ContrastePage()
/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { contrastePage} from '../../pages/contraste.page';


Given("que o usuário acesse a página de rastreamento dos correios", () => {
    contrastePage.acessarCorreios()
})

When("o usuário clicar no botão 'Acessibilidade'", () => {
    contrastePage.clicarAcessibilidade()
})

And("clidar no botão 'Alto Contraste'", () => {
    contrastePage.clicarAltoContraste()
})

Then("será apresentada a página com o background em preto", () => {
    contrastePage.validarClassContrast()
})

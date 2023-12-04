/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { loginInvalido } from '../../pages/loginInvalido.page';


Given("o usuário tenta fazer login no site dos correios", () => {
    loginInvalido.acessarCorreios();
});

When("o usuario passar um usuario incorreto", () => {
        
    loginInvalido.digitarUsuario2();
  
})

And("senha inválida ou incorreta", () => {
    loginInvalido.digitarSenha2();
})

And("confirmar o login", () => {
    loginInvalido.confirmarLogin2();
})

Then("deve ser exibido ao usuário Usuário ou senha inválidos", () => {
    loginInvalido.invalidarLogin2();
})
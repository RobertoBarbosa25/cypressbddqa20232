/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { alterarSenhaIncorreta } from "../../pages/alterarSenhaIncorreta.page";

Given("o usuario acessa o site meus correios", () => {
  alterarSenhaIncorreta.acessarCorreios();
});
When("o usuario clica para a pagina de login", ()  =>{
  alterarSenhaIncorreta.acessarLogin();
});
And("efetua o login", ()  =>{
  alterarSenhaIncorreta.efetuarLogin();
});
And("ir para pagina de alterar senha", ()  =>{
  alterarSenhaIncorreta.paginaAlterarSenha();
});
And("preencher os campos", ()  =>{
  alterarSenhaIncorreta.preencherCampos();
});
When("confirma a alteração de senha", ()  =>{
  alterarSenhaIncorreta.confirmarAlteracao();
});
Then("mostra que a senha atual é invalida", ()  =>{
  alterarSenhaIncorreta.confirmarSenhaAtualInvalida();
})







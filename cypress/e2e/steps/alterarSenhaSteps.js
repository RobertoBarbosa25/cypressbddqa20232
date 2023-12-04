/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { alterarSenha } from "../../pages/alterarSenha.page";

Given("o usuario acessa o site meus correios", () => {
  alterarSenha.acessarCorreios();
});
When("o usuario clica para a pagina de login", () => {
  alterarSenha.acessarLogin();
});
And("efetua o login", () => {
  alterarSenha.efetuarLogin();
});
And("ir para pagina de alterar senha", () => {
  alterarSenha.paginaAlterarSenha();
});
And("preencher os campos validos", () => {
  alterarSenha.preencherCamposValidos();
});
When("confirma a alteração de senha", () => {
  alterarSenha.confirmarAlteracao();
});
Then("mostra ao usuario uma mensagem na tela Sucesso", () => {
  alterarSenha.confirmarSenhaAlterada();
});

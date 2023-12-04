/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { loginValido } from "../../pages/loginValido.page";

Given("o usuário tenta fazer login no site dos correios", () => {
  loginValido.acessarCorreios();
});

When("o usuario passar um usuario", () => {
  loginValido.digitarUsuario2();
});

And("usuario preenche a senha", () => {
  loginValido.digitarSenha2();
});

And("confirmar o login", () => {
  loginValido.confirmarLogin2();
});

Then("deverá aparecer na tela uma mensagem", () => {
  loginValido.ValidarLogin2();
});

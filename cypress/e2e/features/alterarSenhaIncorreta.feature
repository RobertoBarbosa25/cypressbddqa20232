Feature: 

  Scenario: Tentar alterar a senha passando a senha atual incorreta
    Given o usuario acessa o site meus correios
    When o usuario clica para a pagina de login
    And efetua o login
    And ir para pagina de alterar senha
    And preencher os campos
    When confirma a alteração de senha
    Then mostra que a senha atual é invalida
    

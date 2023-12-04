Feature: 

  Scenario: Login válido
    Given o usuário tenta fazer login no site dos correios
    When o usuario passar um usuario
    And usuario preenche a senha
    And confirmar o login
    Then deverá aparecer na tela uma mensagem

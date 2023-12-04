Feature: 

  Scenario: Login inválido
    Given o usuário tenta fazer login no site dos correios
    When o usuario passar um usuario incorreto
    And senha inválida ou incorreta
    And confirmar o login
    Then deve ser exibido ao usuário Usuário ou senha inválidos

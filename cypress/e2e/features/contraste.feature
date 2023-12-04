
Feature: Acessibilidade
	Como usuário da empresa
	Quero verificar o acesso
	Para pessoas com deficiência visual no rastreamento do Correios

  Background: 
    Given que o usuário acesse a página de rastreamento dos correios

  Scenario: Ativação de contraste
    When o usuário clicar no botão 'Acessibilidade'
    And clidar no botão 'Alto Contraste'
    Then será apresentada a página com o background em preto

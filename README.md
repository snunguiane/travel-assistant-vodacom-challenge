# Travel Assistant

## Desafio Vodacom

### Desenvolvedor: Shen Francisco Nunguiane
### Data: 18 de Junho de 2024

---

## Descrição

O Travel Assistant é uma aplicação web que permite aos usuários pesquisar informações detalhadas sobre cidades de destino, incluindo população, PIB per capita, previsão do tempo e taxas de câmbio. 
A aplicação oferece suporte multilíngue para atender a um público global.

## Funcionalidades

- **Pesquisa de Destino**: Permite aos usuários buscar informações detalhadas sobre uma cidade específica.
- **Informações Detalhadas**:
  - **População e PIB**: Dados populacionais e PIB per capita da cidade.
  - **Previsão do Tempo**: Previsão meteorológica atualizada.
  - **Taxas de Câmbio**: Informações sobre as taxas de câmbio.
- **Autenticação de Usuários**: Registro e login de usuários.
- **Suporte Multilíngue**: Suporte para português, inglês e francês, com português como idioma padrão.
- **Elementos Interativos**: Mapas interativos para visualizar a localização da cidade.
- **Dados Históricos**: Comparação de dados históricos de população e PIB para os últimos 10 anos.

## APIs Utilizadas

- **OpenWeatherMap**: Fornece a previsão do tempo para a cidade pesquisada.
- **ExchangeRatesAPI**: Fornece as taxas de câmbio atualizadas.
- **World Bank API**: Fornece dados de população e PIB per capita para a cidade pesquisada.

## Requisitos para Rodar o Projeto

1. **Redis Server**: Deve estar instalado e em execução.
2. **MongoDB**: Deve estar instalado e em execução.
3. **Certificados SSL**: Aplique o certificado no arquivo "server.crt" como confiável em sua máquina ou navegador, ou gere seu próprio certificado e atualize-o no projeto.

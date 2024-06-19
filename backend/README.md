# ========================== Desafio Vodacom ==========================

### Desenvolvedor: Shen Francisco Nunguiane

### Projetco: Assistente de Viagem

### Data: 18 de Junho de 2024

# =======================================================================

## Requisitos para executar o projecto:

1. O servidor Redis deve estar instalado e em execução, actualize os dados de conexao no ficheiro .env
2. O mongoose: ORM para MongoDB deve estar instalado e em execução, actualize os dados de conexao no ficheiro .env
3. Aplique o certificado no ficheiro "server.crt" como confiável em sua computador ou navegador, ou gere seu próprio certificado e atualize-o no projeto.

## Executar o projecto:

1. **Executar o servidor (backend):**

   - Abra um terminal.
   - Navegue até o diretório do backend: cd "seu_caminho"/travel-assistant-web-app/backend
   - Inicie o servidor backend: npm start

2. **Executar o frontend:**
   - Abra outro terminal.
   - Navegue até o diretório do frontend: cd "seu_caminho"/travel-assistant-web-app/frontend
   - Inicie o servidor frontend:npm start

## Documentação Rápida

- **Desenvolvimento Frontend:** React
- **Desenvolvimento Backend:** Node.js + Express
- **Cache:** Servidor Redis para implementar estratégias de cache e optimizar tempos de resposta, reduzindo chamadas à API.
- **Limitação de Taxa:** `rateLimit` do Express para prevenir abuso do serviço.
- **Testes Unitários:**
  - Para componentes frontend e backend para garantir a confiabilidade do código, execute: npm test
  - Nota: Os testes de frontend podem não funcionar devido à implementação de tradução.
- **Testes de Integração:** Para verificar o fluxo de trabalho completo da aplicação, execute: npm test
  no diretório do backend.

- **Documentação da API:** Inicie o backend e o frontend, depois navegue para: https://localhost:5001/api-docs/
  no seu navegador.
- **Suporte Multilíngue:** react-i18next para atender a uma audiência global (linguas configuradas: ingles, portugues e frances)
- **Mapas Interativos:** react-leaflet para incorporar elementos interativos como mapas para visualizar a localização.

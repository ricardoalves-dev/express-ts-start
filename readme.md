# Express-TS-Start 🌐

Projeto base para API's com Express

## 📦 Pacotes

### Produção
- dotenv
- express
- helmet
- typescript
- zod

### Dev
- @eslint/js
- @types/express
- @types/jest
- @types/node
- eslint
- eslint-plugin-import
- jest
- tsx
- typescript-eslint

## 🔀 Rotas

- /ping: rota de teste que deve retornar pong
- /health: rota para teste de saúde da API

## 🧩 Middlewares

- express.json()
- helmet()
- ApiResponseMiddleware: Middleware que encapsula respostas da API para padronizar no formato { data: object/object[], numberOfRecords: number}
- ErrorHandlerMiddleware: Middleware para captura de exceções da aplicação. Padroniza a resposta como { message: string, name: string, stack: string }. Deve ser melhorado para tratar exceções específicas da aplicação.
- RequestLoggerMiddleware: Middleware para registrar informações acerca da requisição e resposta

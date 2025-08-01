# Pacotes

- dotenv
- express/@types/express
- helmet
- typescript
- zod
- jest/@types/jest
- @types/node
- tsx

# Rotas

- /ping: rota de teste que deve retornar pong
- /health: rota para teste de saúde da API

# Middlewares

- express.json()
- helmet()
- ApiResponseMiddleware: Middleware que encapsula respostas da API para padronizar no formato { data: object/object[], numberOfRecords: number}
- ErrorHandlerMiddleware: Middleware para captura de exceções da aplicação. Padroniza a resposta como { message: string, name: string, stack: string }. Deve ser melhorado para tratar exceções específicas da aplicação.

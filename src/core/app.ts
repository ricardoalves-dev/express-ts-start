import express, { Application, ErrorRequestHandler, RequestHandler } from "express";

export interface IAppMiddleware {
  name: string,
  get: RequestHandler,
}

export interface IAppErrorHandlerMiddleware {
  name: string,
  get: ErrorRequestHandler,
}

export interface IAppRoute {
  uri: string;
  router: express.Router
}

export class App {
  private app: Application;

  constructor() {
    this.app = express();
  }

  public registerMiddlewares(appMiddlewares: Array<IAppMiddleware>): App {
    const numberOfMiddlewares = appMiddlewares.length;
    console.group(`- Registrando ${numberOfMiddlewares} Middlewares`);
    appMiddlewares.forEach((middleware, index) => {
      console.info(`${index + 1}/${numberOfMiddlewares}: ${middleware.name}`);
      this.app.use(middleware.get);
    });
    console.groupEnd();

    return this;
  }

  public registerRoutes(appRoutes: Array<IAppRoute>): App {
    const numberOfRoutes = appRoutes.length;
    console.group(`- Registrando ${numberOfRoutes} Rotas`);
    appRoutes.forEach((routes, index) => {
      console.info(`${index + 1}/${numberOfRoutes}: ${routes.uri}`);
      this.app.use(routes.uri, routes.router);
    });
    console.groupEnd();

    return this;
  }

  public registerErrorHandlers(appErrorHandlers: Array<IAppErrorHandlerMiddleware>): App {
    const numberOfErrorHandlers = appErrorHandlers.length;
    console.group(`- Registrando ${numberOfErrorHandlers} Handlers de Erro`);
    appErrorHandlers.forEach((errorHandler, index) => {
      console.info(`${index + 1}/${numberOfErrorHandlers}: ${errorHandler.name}`);
      this.app.use(errorHandler.get);
    });
    console.groupEnd();

    return this;
  }

  start(port: number): App {
    this.app.listen(port, () => {
      console.group('* Iniciando servidor');
      console.groupEnd();
      console.info(`Servidor escutando na porta ${port}`);
    });

    return this;
  }
}
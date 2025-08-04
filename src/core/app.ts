import express, { Application, ErrorRequestHandler, RequestHandler } from 'express';
import { Logger } from './logger/Logger';

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
  router: express.Router;
}

export class App {
  private app: Application;
  private logger = new Logger(App);

  constructor() {
    this.app = express();
  }

  public registerMiddlewares(appMiddlewares: Array<IAppMiddleware>): App {
    const numberOfMiddlewares = appMiddlewares.length;
    this.logger.group(`🧩 Registrando ${numberOfMiddlewares} Middlewares`);
    appMiddlewares.forEach((middleware, index) => {
      this.logger.info(`${index + 1}/${numberOfMiddlewares}: ${middleware.name}`);
      this.app.use(middleware.get);
    });
    this.logger.groupEnd();

    return this;
  }

  public registerRoutes(appRoutes: Array<IAppRoute>): App {
    const numberOfRoutes = appRoutes.length;
    this.logger.group(`🔀 Registrando ${numberOfRoutes} Rotas`);
    appRoutes.forEach((routes, index) => {
      this.logger.info(`${index + 1}/${numberOfRoutes}: ${routes.uri}`);
      this.app.use(routes.uri, routes.router);
    });
    this.logger.groupEnd();

    return this;
  }

  public registerErrorHandlers(appErrorHandlers: Array<IAppErrorHandlerMiddleware>): App {
    const numberOfErrorHandlers = appErrorHandlers.length;
    this.logger.group(`🚨 Registrando ${numberOfErrorHandlers} Handlers de Erro`);
    appErrorHandlers.forEach((errorHandler, index) => {
      this.logger.info(`${index + 1}/${numberOfErrorHandlers}: ${errorHandler.name}`);
      this.app.use(errorHandler.get);
    });
    this.logger.groupEnd();

    return this;
  }

  start(port: number): App {
    this.app.listen(port, () => {
      this.logger.info(`Servidor escutando na porta ${port} 🚀`);
    });

    return this;
  }
}
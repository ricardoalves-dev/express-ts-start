import { App } from "./core/app";
import 'dotenv/config';
import { BodyParserMiddleware } from "@core/middlewares/BodyParserMiddleware";
import { HelmetMiddleware } from "@core/middlewares/HelmetMiddleware";
import { ApiResponseMiddleware } from "@core/middlewares/ApiResponseMiddleware";
import { PingPongRouter } from "modules/ping-pong/PingPongRouter";
import { PingPongController } from "modules/ping-pong/PingPongController";
import { ErrorHandlerMiddleware } from "@core/middlewares/ErrorHandlerMiddleware";
import { HealthRouter } from "modules/health/HealthRouter";
import { HealthController } from "modules/health/HealthController";

new App()
  .start(process.env.PORT && !Number.isNaN(process.env.PORT) ? parseInt(process.env.PORT) : 8080)
  .registerMiddlewares(
    [
      new BodyParserMiddleware(),
      new HelmetMiddleware(),
      new ApiResponseMiddleware()
    ]
  )
  .registerRoutes(
    [
      new PingPongRouter(new PingPongController()),
      new HealthRouter(new HealthController()),
    ]
  )
  .registerErrorHandlers(
    [
      new ErrorHandlerMiddleware()
    ]
  );
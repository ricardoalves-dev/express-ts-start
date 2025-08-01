import { HealthController } from "./HealthController";
import express from "express";
import { IAppRoute } from "@core/app";

export class HealthRouter implements IAppRoute {
  readonly uri: string = '/health';
  readonly router: express.Router = express.Router();

  constructor(controller: HealthController) {
    this.router.get('/', controller.getHealthCheck.bind(controller));
  }
}
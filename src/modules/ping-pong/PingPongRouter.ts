import { IAppRoute } from '@core/app';
import { PingPongController } from './PingPongController';
import { Router } from 'express';
import express from 'express';

export class PingPongRouter implements IAppRoute {
  readonly uri: string = '/ping';
  readonly router: Router = express.Router();

  constructor(controller: PingPongController) {
    this.router.get('/', controller.ping.bind(controller));
  }
}
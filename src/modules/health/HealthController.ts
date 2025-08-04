import { Request, Response } from 'express';
import { Health } from './Health';

export class HealthController {
  public getHealthCheck(req: Request, res: Response): void {
    res.status(200).send(new Health());
  }
}
import { Request, Response, NextFunction } from "express";
import { Health } from "./Health";

export class HealthController {
  public getHealthCheck(req: Request, res: Response, next: NextFunction): void {
    res.status(200).send(new Health());
  }
}
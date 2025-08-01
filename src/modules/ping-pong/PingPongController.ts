import { Request, Response, NextFunction } from "express";
import { HttpStatus } from "@core/http-status/HttpStatus";

export class PingPongController {
  async ping(req: Request, res: Response<string>, next: NextFunction): Promise<void> {
    res.status(HttpStatus.OK).send('pong');
  }
}
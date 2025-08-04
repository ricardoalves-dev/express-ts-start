import { Request, Response } from "express";
import { HttpStatus } from "@core/http-status/HttpStatus";

export class PingPongController {
  async ping(req: Request, res: Response<string>): Promise<void> {
    res.status(HttpStatus.OK).send('pong');
  }
}
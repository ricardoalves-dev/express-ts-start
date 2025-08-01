import { IAppErrorHandlerMiddleware } from "@core/app";
import { ErrorRequestHandler, Request, Response, NextFunction } from "express";
import { ApiResponseError } from "@core/api-response/ApiResponseError";
import { HttpStatus } from "@core/http-status/HttpStatus";

export class ErrorHandlerMiddleware implements IAppErrorHandlerMiddleware {
  name: string = 'ErrorHandlerMiddleware';
  get: ErrorRequestHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(new ApiResponseError(err));
  }
}
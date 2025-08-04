import { ApiResponse } from "@core/api-response/ApiResponse";
import { ApiResponseError } from "@core/api-response/ApiResponseError";
import { IAppMiddleware } from "@core/app";
import { Request, Response, NextFunction, RequestHandler } from "express";

export class ApiResponseMiddleware implements IAppMiddleware {
  name: string = 'ApiResponseMiddleware';
  get: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    const originalSend = res.send.bind(res);
    res.send = (body: unknown): Response => {

      if (body instanceof ApiResponse || body instanceof ApiResponseError) return originalSend(body);
      if (Array.isArray(body)) return originalSend(new ApiResponse<unknown[]>(body));
      if (typeof body === 'object' && body !== null) return originalSend(new ApiResponse<object>(body));

      return originalSend(body);
    }

    next();
  }
}
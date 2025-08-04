import { IAppMiddleware } from '@core/app';
import { Request, Response, NextFunction, RequestHandler } from 'express';
import { Logger } from '@core/logger/Logger';

export class RequestLoggerMiddleware implements IAppMiddleware {
  private logger = new Logger(RequestLoggerMiddleware);
  name: string = 'RequestLoggerMiddleware';
  get: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    const start = process.hrtime();

    res.on('finish', () => {
      const duration = process.hrtime(start);
      const responseTimeInSeconds = duration[0] + duration[1] / 1e9; // Convert to seconds
      const logEntry = {
        method: req.method,
        ip: req.ip,
        url: req.originalUrl,
        status: res.statusCode,
        responseTimeInSeconds: responseTimeInSeconds.toFixed(3),
        timestamp: new Date().toISOString(),
      };
      this.logger.debug(JSON.stringify(logEntry));
    });

    next();
  };
}

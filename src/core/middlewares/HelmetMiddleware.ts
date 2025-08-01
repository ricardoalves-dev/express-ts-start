import { IAppMiddleware } from "../app";
import helmet from "helmet";

export class HelmetMiddleware implements IAppMiddleware {
  name = 'Helmet';
  get = helmet();
}
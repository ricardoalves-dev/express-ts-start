import { IAppMiddleware } from '../app';
import express from 'express';

export class BodyParserMiddleware implements IAppMiddleware {
  name = 'BodyParser';
  get = express.json();
}
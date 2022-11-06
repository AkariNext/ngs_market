import { Logger as PinoLogger, pino } from 'pino';

export class Logger {
  private static _instance: PinoLogger

  constructor() { }

  public static get getInstance() {
    if (!this._instance) {
      this._instance = pino({
        transport: {
          target: 'pino-pretty',
          options: {
            colorize: true
          }
        }
      })
      return this._instance
    }
    return this._instance
  }

}
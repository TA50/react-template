/* eslint-disable no-console */
import { ILogger } from "./Ilogger";
import { LogLevel } from "./LogLevel";

export class ConsoleLogger extends ILogger {
  log(message: string, logLevel: LogLevel) {
    const displayMessage = `[At: ${Date.now().toLocaleString()}}] ${message}`;
    switch (logLevel) {
      case LogLevel.Error:
        console.error(displayMessage);
        break;
      case LogLevel.Info:
        console.info(displayMessage);
        break;
      case LogLevel.Warning:
        console.warn(displayMessage);
        break;
      default:
        console.log(displayMessage);
        break;
    }
  }
}

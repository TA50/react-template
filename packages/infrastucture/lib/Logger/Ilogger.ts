import { ILoggerBase } from "./ILoggerBase";
import { LogLevel } from "./LogLevel";

export abstract class ILogger implements ILoggerBase {
  abstract log(message: string, logLevel: LogLevel): void;

  logInformation(message: string) {
    this.log(message, LogLevel.Info);
  }

  logError(message: string) {
    this.log(message, LogLevel.Error);
  }

  logWarning(message: string) {
    this.log(message, LogLevel.Warning);
  }
}

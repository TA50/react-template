import { LogLevel } from "./LogLevel";

export interface ILoggerBase {
  log: (message: string, logLevel: LogLevel) => void;
}

import { AppConfig } from "./AppConfig";

export interface IConfigService {
  get: (key: string) => string;
  bind: () => AppConfig;
}

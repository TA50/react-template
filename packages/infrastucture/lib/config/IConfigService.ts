import { AppConfig } from "./AppConfig";

export interface IConfigService {
  // eslint-disable-next-line no-unused-vars
  get: (key: string) => string;
  bind: () => AppConfig;
}

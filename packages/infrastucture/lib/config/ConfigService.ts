import { AppConfig } from "./AppConfig";
import { IConfigService } from "./IConfigService";

export class ConfigService implements IConfigService {
  bind(): AppConfig {
    return {
      apiKey: this.get("REACT_APP_API_KEY"),
      authDomain: this.get("REACT_APP_AUTH_DOMAIN"),
      measurementId: this.get("REACT_APP_PROJECT_ID"),
      projectId: this.get("REACT_APP_STORAGE_BUCKET"),
      messageSenderId: this.get("REACT_APP_MESSAGING_SENDER_ID"),
      storageBucket: this.get("REACT_APP_APP_ID"),
      appId: this.get("REACT_APP_MEASUREMENT_ID"),
    };
  }

  get(key: string): string {
    let extractedKey: string = key;
    if (!extractedKey.startsWith("REACT_APP_")) {
      extractedKey = `REACT_APP_${key}`;
    }
    const value = process.env[extractedKey];
    if (value) {
      return value;
    }
    throw new Error(`No config value for key ${key}`);
  }
}

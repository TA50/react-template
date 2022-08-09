import { IStorageService } from "./IStorageService";

export class SessionStorageService implements IStorageService {
  clear() {
    sessionStorage.clear();
  }

  get<T>(key: string): T | null {
    const stringifiedValue = sessionStorage.getItem(key);
    if (stringifiedValue) {
      const value = JSON.parse(stringifiedValue);
      return value;
    }
    return null;
  }

  set<T>(key: string, value: T) {
    const stringifiedValue = JSON.stringify(value);
    sessionStorage.setItem(key, stringifiedValue);
  }
}

/* eslint-disable no-unused-vars */

export interface IStorageService {
  get: <T>(key: string) => T | null;
  set: <T>(key: string, value: T) => void;
  clear: () => void;
}

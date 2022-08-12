import { AppConfig } from "@react-template/infrastructure";
import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";

export class FirebaseBuilder {
  // eslint-disable-next-line no-unused-vars, no-empty-function
  constructor(private config: AppConfig) {}

  private app: FirebaseApp;

  private firestore: Firestore;

  createOptions(): FirebaseOptions {
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      projectId: this.config.projectId,
      storageBucket: this.config.storageBucket,
      messagingSenderId: this.config.messageSenderId,
      appId: this.config.appId,
      measurementId: this.config.measurementId,
    };
  }

  createApp(): FirebaseBuilder {
    const options = this.createOptions();
    this.app = initializeApp(options);
    return this;
  }

  createFirestore(): FirebaseBuilder {
    this.firestore = getFirestore(this.app);
    return this;
  }

  getFirestore = () => this.firestore;

  getApp = () => this.app;
}

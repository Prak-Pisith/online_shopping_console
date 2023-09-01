// Observer Pattern

import { ObserverInterface } from "./observer";

export class UserObserver implements ObserverInterface {
  constructor(private userId: number) {}

  updateObserver(message: string): void {
    console.log(`[Trigger] User ${this.userId} received a notification: ${message}`);
  }
}
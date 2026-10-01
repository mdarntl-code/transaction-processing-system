import type { IObserver } from "./IObserver";

export class ConsoleLogger implements IObserver {
  update(data: string): void {
    console.log(`[Логер] Отримано дані: ${data}`);
  }
}

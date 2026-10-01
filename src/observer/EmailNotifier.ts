import type { IObserver } from "./IObserver";

export class EmailNotifier implements IObserver {
  update(data: string): void {
    console.log(`[Email] Відправлено лист з даними: ${data}`);
  }
}

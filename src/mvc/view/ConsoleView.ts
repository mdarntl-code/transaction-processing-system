import { IObserver } from "../../observer/IObserver";

export class ConsoleView implements IObserver {
  update(data: string) {
    console.log(`\n=== ВИВІД VIEW ===`);
    console.log(`Оновлені дані транзакції для відображення:`);
    console.log(`${data}`);
    console.log(`==================\n`);
  }
}

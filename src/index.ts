import { ConsoleView } from "./mvc/ConsoleView";
import { TransactionController } from "./mvc/TransactionController";
import { TransactionModel } from "./mvc/TransactionModel";
import { ConsoleLogger } from "./observer/ConsoleLogger";
import { EmailNotifier } from "./observer/EmailNotifier";

console.log("=== СТАРТ ПРОГРАМИ ===\n");

// 1. Створюємо MVC компоненти
const model = new TransactionModel();
const view = new ConsoleView();
const controller = new TransactionController(model);

// 2. Підписуємо спостерігачів (Observer Pattern)
// Зверни увагу: View також є спостерігачем!
model.subscribe(new ConsoleLogger());
model.subscribe(new EmailNotifier());
model.subscribe(view);

// 3. Сценарій використання (симулюємо дії користувача через Controller)
console.log("--- Сценарій 1: Стандартний податок (18%) + Логування ---");
controller.handleTransaction(1000, false, true);

console.log(
  "--- Сценарій 2: Зміна стратегії на льоту + Шифрування + Логування ---",
);
controller.changeToITStrategy();
controller.handleTransaction(2000, true, true);

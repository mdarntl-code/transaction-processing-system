import { ITSectorTaxStrategy } from "../../strategy/ITSectorTaxStrategy";
import { StandardTaxStrategy } from "../../strategy/StandardTaxStrategy";
import { TransactionModel } from "../model/TransactionModel";

export class TransactionController {
  constructor(private model: TransactionModel) {}

  // Команда на обробку транзакції
  handleTransaction(amount: number, encryption: boolean, logging: boolean) {
    this.model.processTransaction(amount, encryption, logging);
  }

  // Команда на зміну податку
  changeToITStrategy() {
    console.log("-> КОНТРОЛЕР: Зміна стратегії на IT Sector (5%)...");
    this.model.setStrategy(new ITSectorTaxStrategy());
  }

  // Команда на зміну податку
  changeToStandardStrategy() {
    console.log("-> КОНТРОЛЕР: Зміна стратегії на Standard (18%)...");
    this.model.setStrategy(new StandardTaxStrategy());
  }
}

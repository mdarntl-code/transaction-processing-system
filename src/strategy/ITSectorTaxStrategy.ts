import { ITaxCalculationStrategy } from "./ITaxCalculationStrategy";

export class ITSectorTaxStrategy implements ITaxCalculationStrategy {
  calculate(amount: number): number {
    return amount * 0.05;
  }
}

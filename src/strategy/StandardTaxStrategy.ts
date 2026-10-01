import { ITaxCalculationStrategy } from "./ITaxCalculationStrategy";

export class StandardTaxStrategy implements ITaxCalculationStrategy {
  calculate(amount: number): number {
    return amount * 0.18;
  }
}

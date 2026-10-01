export interface ITaxCalculationStrategy {
  calculate(amount: number): number;
}

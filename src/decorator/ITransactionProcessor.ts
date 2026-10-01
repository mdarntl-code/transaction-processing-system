export interface ITransactionProcessor {
  process(amount: number): string;
}

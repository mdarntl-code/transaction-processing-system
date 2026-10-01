import { ITransactionProcessor } from './ITransactionProcessor';

export class BaseProcessor implements ITransactionProcessor {
    process(amount: number): string {
        return `Обробка суми: ${amount}`;
    }
}

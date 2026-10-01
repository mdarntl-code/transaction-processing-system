import { ITransactionProcessor } from './ITransactionProcessor';

export class ProcessorDecorator implements ITransactionProcessor {
    protected processor: ITransactionProcessor;

    constructor(processor: ITransactionProcessor) {
        this.processor = processor;
    }

    process(amount: number): string {
        return this.processor.process(amount);
    }
}

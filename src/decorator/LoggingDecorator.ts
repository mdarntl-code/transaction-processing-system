import { ProcessorDecorator } from './ProcessorDecorator';

export class LoggingDecorator extends ProcessorDecorator {
    process(amount: number): string {
        const baseResult = super.process(amount);
        const timestamp = new Date().toISOString();
        return `[LOG ${timestamp}] ${baseResult}`;
    }
}

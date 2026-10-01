import { ProcessorDecorator } from './ProcessorDecorator';

export class EncryptionDecorator extends ProcessorDecorator {
    process(amount: number): string {
        const baseResult = super.process(amount);
        // Проста імітація шифрування (перевертаємо рядок)
        const encrypted = baseResult.split('').reverse().join('');
        return `[Зашифровано: ${encrypted}]`;
    }
}

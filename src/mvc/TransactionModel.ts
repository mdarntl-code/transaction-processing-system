import { IObserver } from '../observer/IObserver';
import { ITaxCalculationStrategy } from '../strategy/ITaxCalculationStrategy';
import { StandardTaxStrategy } from '../strategy/StandardTaxStrategy';
import { ITransactionProcessor } from '../decorator/ITransactionProcessor';
import { BaseProcessor } from '../decorator/BaseProcessor';
import { EncryptionDecorator } from '../decorator/EncryptionDecorator';
import { LoggingDecorator } from '../decorator/LoggingDecorator';

export class TransactionModel {
    private processedData: string = "";
    private observers: IObserver[] = [];
    private strategy: ITaxCalculationStrategy = new StandardTaxStrategy();

    // Паттерн Strategy: Зміна стратегії на льоту
    setStrategy(strategy: ITaxCalculationStrategy) {
        this.strategy = strategy;
    }

    // Паттерн Observer: Підписка
    subscribe(observer: IObserver) {
        this.observers.push(observer);
    }

    // Паттерн Observer: Сповіщення
    notifyObservers() {
        for (const obs of this.observers) {
            obs.update(this.processedData);
        }
    }

    // Головна бізнес-логіка
    processTransaction(rawAmount: number, useEncryption: boolean, useLogging: boolean) {
        // 1. Застосовуємо поточну Стратегію
        const calculatedTax = this.strategy.calculate(rawAmount);
        const calculatedAmount = rawAmount + calculatedTax;

        // 2. Використовуємо Декоратори
        let processor: ITransactionProcessor = new BaseProcessor();
        
        if (useEncryption) {
            processor = new EncryptionDecorator(processor);
        }
        if (useLogging) {
            processor = new LoggingDecorator(processor);
        }

        // 3. Зберігаємо результат і викликаємо Спостерігачів
        this.processedData = processor.process(calculatedAmount);
        this.notifyObservers();
    }
}

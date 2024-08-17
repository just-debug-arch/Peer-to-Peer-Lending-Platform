import crypto from 'node:crypto';

export class LoanRequest {
    id;
    borrower;
    amount;
    interestRate;
    duration;
    createdAt;
    providers;

    /**
     * ### LoanRequest model
     * @param {*} data {borrower: address, amount: number, interestRate: number, duration: number}
     */
    constructor({ borrower, amount, interestRate, duration }) {
        this.id = crypto.randomUUID();
        this.borrower = borrower;
        this.amount = amount;
        this.interestRate = interestRate;
        this.duration = duration;
        this.createdAt = Date.now();
        this.providers = new Map();
    }

    /**
     * ### LoanRequest getData
     * @description return loan request basic data.
     * @returns {*}
     */
    getData() {
        return {
            id: this.id,
            borrower: this.borrower,
            amount: this.amount,
            interestRate: this.interestRate,
            duration: this.duration,
            createdAt: this.createdAt,
        };
    }

    /**
     * ### LoanRequest addProvider
     * @description add a provider to the loan request.
     * @param {*} provider LoanProvider model
     */
    addProvider(provider) {
        this.providers.set(provider.id, provider);
    }

    /**
     * ### LoanRequest getProviderById
     * @description get a provider by given id.
     * @param {*} id UUID
     * @returns LoanProvider model
     */
    getProviderById(id) {
        return this.providers.get(id);
    }

    /**
     * ### LoanRequest getProviders
     * @description return all providers of the loan request.
     * @returns LoanProvider model[]
     */
    getProviders() {
        return Array.from(this.providers.values());
    }
}

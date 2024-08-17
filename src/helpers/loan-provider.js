import crypto from 'node:crypto';

export class LoanProvider {
    id;
    requestId;
    provider;
    amount;
    createdAt;

    /**
     * ### LoanProvider model
     * @param {*} data {requestId: UUID, provider: address, amount: number}
     */
    constructor({ requestId, provider, amount }) {
        this.id = crypto.randomUUID();
        this.requestId = requestId;
        this.provider = provider;
        this.amount = amount;
        this.createdAt = Date.now();
    }

    /**
     * ### LoanProvider getData
     * @description return loan provider basic data.
     * @returns {*}
     */
    getData() {
        return {
            id: this.id,
            requestId: this.requestId,
            provider: this.provider,
            amount: this.amount,
            createdAt: this.createdAt,
        };
    }
}

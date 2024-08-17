class LoanStorage {
    requests;

    constructor() {
        this.requests = new Map();
    }

    /**
     * ### LoanStorage getAllRequests
     * @description get all stored loan requests.
     * @returns {*} list of LoanRequest models
     */
    getAllRequests() {
        return Array.from(this.requests.values());
    }

    /**
     * ### LoanStorage addRequest
     * @description store a single loan request.
     * @param {*} request LoanRequest model
     */
    addRequest(request) {
        this.requests.set(request.id, request);
    }

    /**
     * ### LoanStorage getRequestById
     * @description get a single loan request by given id.
     * @param {*} id UUID
     * @returns LoanRequest model | undefined (not found)
     */
    getRequestById(id) {
        return this.requests.get(id);
    }

    /**
     * ### LoanStorage updateRequest
     * @description update a single loan request.
     * @param {*} request LoanRequest model
     */
    updateRequest(request) {
        this.requests.set(request.id, request);
    }
}

export const loanStorage = new LoanStorage();

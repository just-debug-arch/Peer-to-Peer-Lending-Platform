import { LoanRequest } from "../helpers/loan-request";
import { RollupStateHandler } from "../rollup-init";
import { loanStorage } from "../helpers/loan-storage";

export class LoanRequestController {
  /**
   * ### LoanRequestController createLoanRequest
   * @description create a loan request.
   * @param {*} data {borrower: address ("0x..."), amount: number, interestRate: number, duration: number}
   */
  async createLoanRequest(data) {
    if (
      !data.borrower ||
      !data.amount ||
      !data.interestRate ||
      !data.duration
    ) {
      return await RollupStateHandler.handleReport({
        error:
          "Borrower, amount, interest rate, and duration must be provided.",
      });
    }

    return await RollupStateHandler.advanceWrapper(() => {
      const newLoanRequest = new LoanRequest(data);
      loanStorage.addRequest(newLoanRequest);

      return {
        ok: true,
        message: `Loan request created successfully!`,
        data: newLoanRequest.getData(),
      };
    });
  }

  /**
   * ### LoanRequestController getAllLoanRequests
   * @description get all loan requests.
   */
  async getAllLoanRequests() {
    return await RollupStateHandler.inspectWrapper(() =>
      loanStorage.getAllRequests()
    );
  }

  /**
   * ### LoanRequestController getLoanRequestById
   * @description get a loan request by given id.
   * @param {*} data loan request id (UUID)
   */
  async getLoanRequestById(data) {
    const requestId = data[0];
    const storageRequest = loanStorage.getRequestById(requestId);

    if (!storageRequest?.id)
      return await RollupStateHandler.handleReport({
        error: `Loan request not found for id '${requestId}'.`,
      });

    return await RollupStateHandler.inspectWrapper(() => ({
      details: storageRequest.getData(),
    }));
  }
}

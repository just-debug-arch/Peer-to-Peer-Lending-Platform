import { LoanProvider } from "../helpers/loan-provider";
import { RollupStateHandler } from "../rollup-init";
import { loanStorage } from "../helpers/loan-storage";

export class LoanProviderController {
  /**
   * ### LoanProviderController provideLoan
   * @description provide a loan to a loan request.
   * @param {*} data {requestId: UUID, provider: address ("0x..."), amount: number}
   */
  async provideLoan(data) {
    if (!data.requestId || !data.provider || !data.amount) {
      return await RollupStateHandler.handleReport({
        error: "Request ID, provider, and amount must be provided.",
      });
    }

    const loanRequest = loanStorage.getRequestById(data.requestId);

    if (!loanRequest?.id) {
      return await RollupStateHandler.handleReport({
        error: `Loan request not found for id '${data.requestId}'`,
      });
    }

    return await RollupStateHandler.advanceWrapper(() => {
      const newLoanProvider = new LoanProvider(data);
      loanRequest.addProvider(newLoanProvider);
      loanStorage.updateRequest(loanRequest);

      return {
        ok: true,
        message: `Loan provided successfully to request '${loanRequest.id}'!`,
        data: newLoanProvider.getData(),
      };
    });
  }

  /**
   * ### LoanProviderController getLoanById
   * @description get a loan by given loan and provider id.
   * @param {*} data {requestId: UUID, providerId: UUID}
   */
  async getLoanById(data) {
    const requestId = data[0];
    const storageRequest = loanStorage.getRequestById(requestId);

    if (!storageRequest?.id)
      return await RollupStateHandler.handleReport({
        error: `Loan request not found for id '${requestId}'.`,
      });

    const providerId = data[1];
    const loan = storageRequest.getProviderById(providerId);

    if (!loan?.id)
      return await RollupStateHandler.handleReport({
        error: `Loan provider not found for id '${providerId}'.`,
      });

    return await RollupStateHandler.inspectWrapper(() => ({
      details: loan.getData(),
    }));
  }
}

import { LoanRequestController } from "./loan-request";
import { LoanProviderController } from "./loan-provider";

const loanRequestController = new LoanRequestController();
const loanProviderController = new LoanProviderController();

export const controller = {
  createLoanRequest: loanRequestController.createLoanRequest,
  getAllLoanRequests: loanRequestController.getAllLoanRequests,
  getLoanRequestById: loanRequestController.getLoanRequestById,
  provideLoan: loanProviderController.provideLoan,
  getLoanById: loanProviderController.getLoanById,
};

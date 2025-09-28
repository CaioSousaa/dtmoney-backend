import { TransactionRepository } from "../../../external/prisma/repositories/TransactionsRepository";
import { DeleteTransactionController } from "../../../infra/http/controllers/transactions/DeleteTransactionController";
import { DeleteTransactionUseCase } from "../../../usecases/transaction/DeleteTransactionUseCase";

export const deleteTransactionFactory = () => {
  const transactionRepository = new TransactionRepository();
  const deleteTransactionsUsecase = new DeleteTransactionUseCase(
    transactionRepository
  );
  const deleteTransactionsController = new DeleteTransactionController(
    deleteTransactionsUsecase
  );

  return deleteTransactionsController;
};

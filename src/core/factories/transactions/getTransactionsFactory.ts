import { TransactionRepository } from "../../../external/prisma/repositories/TransactionsRepository";
import { GetTransactionsController } from "../../../infra/http/controllers/transactions/GetTransactionsController";
import { GetTransactionsUseCase } from "../../../usecases/transaction/GetTransactionsUseCase";

export const getTransactionsFactory = () => {
  const transactionRepository = new TransactionRepository();
  const getTransactionsUsecase = new GetTransactionsUseCase(
    transactionRepository
  );
  const getTransactionsController = new GetTransactionsController(
    getTransactionsUsecase
  );

  return getTransactionsController;
};

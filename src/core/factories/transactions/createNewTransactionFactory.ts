import { TransactionRepository } from "../../../external/prisma/repositories/TransactionsRepository";
import { CreateNewTransactionController } from "../../../infra/http/controllers/transactions/CreateNewTransactionController";
import { CreateNewTransactionUseCase } from "../../../usecases/transaction/CreateNewTransactionUseCase";

export const createNewTransactionFactory = () => {
  const transactionRepository = new TransactionRepository();
  const createNewTransactionUseCase = new CreateNewTransactionUseCase(
    transactionRepository
  );
  const createNewTransactionController = new CreateNewTransactionController(
    createNewTransactionUseCase
  );

  return createNewTransactionController;
};

import { Transaction } from "../../domain/entities/Transaction.js";
import { PrismaTransactionPortRepository } from "../ports/PrismaTransactionPortRepository.js";

export class GetTransactionsUseCase {
  constructor(private transactionPort: PrismaTransactionPortRepository) {}

  public async execute(): Promise<Transaction[]> {
    const transactions = await this.transactionPort.getAll();

    return transactions;
  }
}

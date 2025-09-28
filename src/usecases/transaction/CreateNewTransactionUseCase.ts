import { AppResponse } from "../../adapters/responses/AppResponse";
import { Transaction } from "../../domain/entities/Transaction";
import { PrismaTransactionPortRepository } from "../ports/PrismaTransactionPortRepository";
import TransactionSchemaDTO from "./dtos/CreateTransactionDTO";

export class CreateNewTransactionUseCase {
  constructor(private transactionPort: PrismaTransactionPortRepository) {}

  public async execute({
    amountInCents,
    category,
    title,
    type,
  }: TransactionSchemaDTO): Promise<Transaction> {
    if (amountInCents < 1) {
      throw new AppResponse("O valor não pode ser 0,00", 400);
    }

    if (title.length < 3) {
      throw new AppResponse("O título deve ter mais de 3 caracteres", 400);
    }

    if (!["DEPOSIT", "WITHDRAW"].includes(type)) {
      throw new AppResponse("O tipo deve ser 'DEPOSIT' ou 'WITHDRAW'.", 400);
    }

    const newTransaction: Transaction = {
      category,
      amountInCents,
      title,
      type,
      createdAt: new Date().toISOString(),
    };

    const transaction = await this.transactionPort.create(newTransaction);

    return transaction;
  }
}

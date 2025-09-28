import { Transaction } from "../../../../generated/prisma";
import prisma from "../../../infra/db/prisma/prisma";
import { PrismaTransactionPortRepository } from "../../../usecases/ports/PrismaTransactionPortRepository";
import TransactionSchemaDTO from "../../../usecases/transaction/dtos/CreateTransactionDTO";

export class TransactionRepository implements PrismaTransactionPortRepository {
  public async create({
    amountInCents,
    category,
    title,
    type,
  }: TransactionSchemaDTO): Promise<Transaction> {
    const transaction = await prisma.transaction.create({
      data: {
        title,
        type,
        category,
        amountInCents,
        createdAt: new Date().toISOString(),
      },
    });

    return {
      ...transaction,
      createdAt: transaction.createdAt,
    };
  }
  public async getAll(): Promise<Transaction[]> {
    const transactions = await prisma.transaction.findMany({});
    return transactions;
  }

  public async delete(transactionId: number): Promise<void> {
    await prisma.transaction.delete({ where: { id: transactionId } });
  }
}

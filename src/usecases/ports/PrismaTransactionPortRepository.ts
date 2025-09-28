import { Transaction } from "../../domain/entities/Transaction.ts";
import TransactionSchemaDTO from "../transaction/dtos/CreateTransactionDTO.ts";

export interface PrismaTransactionPortRepository {
  create(data: TransactionSchemaDTO): Promise<Transaction>;
  getAll(): Promise<Transaction[]>;
  delete(transactionId: number): Promise<void>;
}

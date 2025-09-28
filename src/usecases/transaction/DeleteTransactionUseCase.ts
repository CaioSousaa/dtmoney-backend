import { PrismaTransactionPortRepository } from "../ports/PrismaTransactionPortRepository";

export class DeleteTransactionUseCase {
  constructor(private transactionPort: PrismaTransactionPortRepository) {}

  public async execute(transactionId: number): Promise<void> {
    await this.transactionPort.delete(transactionId);
  }
}

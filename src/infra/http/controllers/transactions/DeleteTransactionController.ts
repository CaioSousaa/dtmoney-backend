import { Request, Response } from "express";
import { DeleteTransactionUseCase } from "../../../../usecases/transaction/DeleteTransactionUseCase";

export class DeleteTransactionController {
  constructor(private deleteTransactionUseCase: DeleteTransactionUseCase) {}

  public async handle(req: Request, res: Response) {
    try {
      const { transactionId } = req.params as { transactionId: string };

      await this.deleteTransactionUseCase.execute(Number(transactionId));

      res.status(200).json({ message: "Transaction deleted successfully" });
    } catch (err: any) {
      res
        .status(err?.status || 400)
        .json({ error: err.message || "Unexpected error" });
    }
  }
}

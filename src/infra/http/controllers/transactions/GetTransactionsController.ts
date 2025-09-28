import { Request, Response } from "express";
import { GetTransactionsUseCase } from "../../../../usecases/transaction/GetTransactionsUseCase";

export class GetTransactionsController {
  constructor(private getTransactionsUseCase: GetTransactionsUseCase) {}

  public async handle(req: Request, res: Response) {
    try {
      const transactions = await this.getTransactionsUseCase.execute();

      res.status(200).json(transactions);
    } catch (err: any) {
      res
        .status(err?.status || 500)
        .json({ error: err.message || "Unexpected error" });
    }
  }
}

import { Request, Response } from "express";
import { CreateNewTransactionUseCase } from "../../../../usecases/transaction/CreateNewTransactionUseCase";
import { transactionSchemaDTO } from "../../../../usecases/transaction/dtos/CreateTransactionDTO";

export class CreateNewTransactionController {
  constructor(
    private createNewTransactionUseCase: CreateNewTransactionUseCase
  ) {}

  public async handle(req: Request, res: Response) {
    try {
      const data = transactionSchemaDTO.parse(req.body);

      const newTransaction = await this.createNewTransactionUseCase.execute(
        data
      );

      res.status(201).json(newTransaction);
    } catch (err: any) {
      res
        .status(err?.status || 400)
        .json({ error: err.message || "Unexpected error" });
    }
  }
}

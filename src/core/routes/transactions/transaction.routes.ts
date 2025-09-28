import { Router, Request, Response } from "express";
import { createNewTransactionFactory } from "../../factories/transactions/createNewTransactionFactory";
import { getTransactionsFactory } from "../../factories/transactions/getTransactionsFactory";
import { deleteTransactionFactory } from "../../factories/transactions/deleteTransactionFactory";

export const transactionRoutes = Router();

// Criar nova transação
transactionRoutes.post("/", (req: Request, res: Response) => {
  return createNewTransactionFactory().handle(req, res);
});

// Obter transações
transactionRoutes.get("/", (req: Request, res: Response) => {
  return getTransactionsFactory().handle(req, res);
});

// Deletar transação
transactionRoutes.delete("/:transactionId", (req: Request, res: Response) => {
  return deleteTransactionFactory().handle(req, res);
});

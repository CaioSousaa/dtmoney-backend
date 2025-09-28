import z from "zod";

export const transactionSchemaDTO = z.object({
  title: z.string().nonempty({ message: "O título é obrigatório." }),
  category: z.string().nonempty({ message: "A categoria é obrigatória." }),
  amountInCents: z.number({
    error: "O valor precisa ser um número.",
  }),
  type: z
    .string()
    .nonempty({ message: "O tipo da transação é obrigatório." })
    .refine((val) => ["DEPOSIT", "WITHDRAW"].includes(val), {
      message: "O tipo deve ser 'DEPOSIT' ou 'WITHDRAW'.",
    }),
});

type TransactionSchemaDTO = z.infer<typeof transactionSchemaDTO>;

export default TransactionSchemaDTO;

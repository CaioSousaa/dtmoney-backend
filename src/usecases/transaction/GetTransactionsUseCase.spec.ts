import { Transaction } from "../../domain/entities/Transaction.ts";
import { GetTransactionsUseCase } from "./GetTransactionsUseCase.ts";
import { getTransactionsMock } from "./mocks/getTransactionsMock.ts";

describe("GetTransactionsUseCase", () => {
  let getTransactionsUseCase: GetTransactionsUseCase;

  beforeEach(() => {
    jest.clearAllMocks();
    getTransactionsUseCase = new GetTransactionsUseCase(
      getTransactionsMock as any
    );

    getTransactionsMock.getAll.mockResolvedValue([]);
  });

  it("it must be possible to return the exact amount of transactions", async () => {
    const transactions: Transaction[] = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      title: `Title ${i}`,
      category: `Test ${i}`,
      type: "WITHDRAW",
      amountInCents: 1000,
      createdAt: new Date(),
    }));

    getTransactionsMock.getAll.mockResolvedValue(transactions);

    const result = await getTransactionsUseCase.execute();

    expect(result).toHaveLength(5);
    expect(result).toEqual(transactions);
    expect(getTransactionsMock.getAll).toHaveBeenCalledTimes(1);
  });
});

import { AppResponse } from "../../adapters/responses/AppResponse.ts";
import { Transaction } from "../../domain/entities/Transaction.ts";
import { CreateNewTransactionUseCase } from "./CreateNewTransactionUseCase.ts";
import { createNewTransactionMock } from "./mocks/createNewTransactionMock.ts";

describe("CreateNewTransactionUseCase", () => {
  let createNewTransactionUseCase: CreateNewTransactionUseCase;

  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    createNewTransactionUseCase = new CreateNewTransactionUseCase(
      createNewTransactionMock as any
    );
  });

  it("it should be possible to cast if amountInCents is less than 1", async () => {
    await expect(
      createNewTransactionUseCase.execute({
        amountInCents: 0,
        category: "Food",
        title: "Lunch",
        type: "WITHDRAW",
      })
    ).rejects.toEqual(new AppResponse("O valor não pode ser 0,00", 400));

    expect(createNewTransactionMock.create).not.toHaveBeenCalled();
  });

  it("it should be throw if title has less than 3 characters", async () => {
    await expect(
      createNewTransactionUseCase.execute({
        amountInCents: 1000,
        category: "Food",
        title: "AB",
        type: "WITHDRAW",
      })
    ).rejects.toEqual(
      new AppResponse("O título deve ter mais de 3 caracteres", 400)
    );

    expect(createNewTransactionMock.create).not.toHaveBeenCalled();
  });

  it("it should be call repository.create with valid data", async () => {
    const transactionMock: Transaction = {
      amountInCents: 1000,
      category: "Food",
      title: "Almoço",
      type: "WITHDRAW",
      createdAt: new Date(),
    };

    createNewTransactionMock.create.mockResolvedValue(transactionMock);

    const result = await createNewTransactionUseCase.execute({
      amountInCents: 1000,
      category: "Food",
      title: "Almoço",
      type: "WITHDRAW",
    });

    expect(result).toEqual(transactionMock);
    expect(createNewTransactionMock.create).toHaveBeenCalledTimes(1);
    expect(createNewTransactionMock.create).toHaveBeenCalledWith(
      expect.objectContaining({
        amountInCents: 1000,
        category: "Food",
        title: "Almoço",
        type: "WITHDRAW",
      })
    );
  });

  it("it should throw if type is not 'DEPOSIT' or 'WITHDRAW'", async () => {
    await expect(
      createNewTransactionUseCase.execute({
        amountInCents: 1000,
        category: "Food",
        title: "Jantar",
        type: "invalide",
      })
    ).rejects.toEqual(
      new AppResponse("O tipo deve ser 'DEPOSIT' ou 'WITHDRAW'.", 400)
    );

    expect(createNewTransactionMock.create).not.toHaveBeenCalled();
  });
});

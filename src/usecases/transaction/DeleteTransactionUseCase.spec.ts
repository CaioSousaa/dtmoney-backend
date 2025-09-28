import { PrismaTransactionPortRepository } from "../ports/PrismaTransactionPortRepository.ts";
import { DeleteTransactionUseCase } from "./DeleteTransactionUseCase.ts";
import { deleteTransactionMock } from "./mocks/deleteTransactionMock.ts";

describe("DeleteTransactionUseCase", () => {
  let deleteTransactionUseCase: DeleteTransactionUseCase;

  beforeEach(() => {
    jest.clearAllMocks();
    deleteTransactionUseCase = new DeleteTransactionUseCase(
      deleteTransactionMock as unknown as PrismaTransactionPortRepository
    );
  });

  it("should call repository.delete with the correct id", async () => {
    deleteTransactionMock.delete.mockResolvedValue(undefined);

    await deleteTransactionUseCase.execute(123);

    expect(deleteTransactionMock.delete).toHaveBeenCalledTimes(1);
    expect(deleteTransactionMock.delete).toHaveBeenCalledWith(123);
  });

  it("should throw if repository.delete throws", async () => {
    deleteTransactionMock.delete.mockRejectedValue(
      new Error("Transaction not found")
    );

    await expect(deleteTransactionUseCase.execute(999)).rejects.toThrow(
      "Transaction not found"
    );

    expect(deleteTransactionMock.delete).toHaveBeenCalledTimes(1);
    expect(deleteTransactionMock.delete).toHaveBeenCalledWith(999);
  });
});

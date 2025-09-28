export class Transaction {
  id?: number;
  title: string;
  type: string;
  category: string;
  amountInCents: number;
  createdAt: Date | string;

  constructor({
    title,
    type,
    category,
    amountInCents,
    createdAt,
  }: Transaction) {
    Object.assign(this, {
      amountInCents,
      title,
      category,
      createdAt,
      type,
    });
  }

  static create({ title, type, category, amountInCents }: Transaction) {
    const transaction = new Transaction({
      title,
      amountInCents,
      category,
      createdAt: new Date(),
      type,
    });

    return transaction;
  }
}

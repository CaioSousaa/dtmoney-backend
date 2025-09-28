-- CreateTable
CREATE TABLE "public"."transaction" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "amountInCents" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "transaction_pkey" PRIMARY KEY ("id")
);

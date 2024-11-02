-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "dateTime" TIMESTAMP(3) NOT NULL,
    "author" TEXT NOT NULL,
    "sum" DOUBLE PRECISION NOT NULL,
    "category" TEXT NOT NULL,
    "comment" TEXT,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

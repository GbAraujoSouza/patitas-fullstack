-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(75) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "type" VARCHAR(20) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

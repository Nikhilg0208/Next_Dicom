/*
  Warnings:

  - You are about to drop the column `x` on the `Point` table. All the data in the column will be lost.
  - You are about to drop the column `y` on the `Point` table. All the data in the column will be lost.
  - You are about to drop the column `z` on the `Point` table. All the data in the column will be lost.
  - Added the required column `coords` to the `Point` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Point" DROP COLUMN "x",
DROP COLUMN "y",
DROP COLUMN "z",
ADD COLUMN     "coords" JSONB NOT NULL;

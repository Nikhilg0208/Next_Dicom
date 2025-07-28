/*
  Warnings:

  - A unique constraint covering the columns `[imageId]` on the table `Dicom` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fileName` to the `Dicom` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Dicom" ADD COLUMN     "fileName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Dicom_imageId_key" ON "Dicom"("imageId");

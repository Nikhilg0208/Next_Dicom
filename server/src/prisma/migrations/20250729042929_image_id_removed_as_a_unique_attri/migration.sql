/*
  Warnings:

  - A unique constraint covering the columns `[fileName]` on the table `Dicom` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Dicom_imageId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Dicom_fileName_key" ON "Dicom"("fileName");

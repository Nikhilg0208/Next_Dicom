/*
  Warnings:

  - A unique constraint covering the columns `[annotationUID]` on the table `Dicom` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Dicom_annotationUID_key" ON "Dicom"("annotationUID");

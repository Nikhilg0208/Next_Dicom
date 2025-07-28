-- CreateTable
CREATE TABLE "Point" (
    "id" UUID NOT NULL,
    "x" DOUBLE PRECISION NOT NULL,
    "y" DOUBLE PRECISION NOT NULL,
    "z" DOUBLE PRECISION NOT NULL,
    "dicomId" UUID NOT NULL,

    CONSTRAINT "Point_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dicom" (
    "id" UUID NOT NULL,
    "imageId" TEXT NOT NULL,
    "FrameOfReferenceUID" TEXT NOT NULL,
    "annotationUID" TEXT NOT NULL,
    "toolName" TEXT NOT NULL,

    CONSTRAINT "Dicom_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Point" ADD CONSTRAINT "Point_dicomId_fkey" FOREIGN KEY ("dicomId") REFERENCES "Dicom"("id") ON DELETE CASCADE ON UPDATE CASCADE;

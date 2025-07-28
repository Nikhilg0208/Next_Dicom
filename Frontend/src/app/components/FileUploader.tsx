"use client";
import React from "react";
import dicomImageLoader from "@cornerstonejs/dicom-image-loader";
import { fileMap } from "../utils/createRandomSplineAnnotation";
const FileUploader: React.FC<{
  setImageIds: (ids: { imageId: string; fileName: string }[]) => void;
}> = ({ setImageIds }) => {
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newImageIds: { imageId: string; fileName: string }[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileName = file.name;

      if (!fileName.endsWith(".dcm")) continue;

      let imageId = fileMap.get(fileName);

      if (!imageId) {
        imageId = dicomImageLoader.wadouri.fileManager.add(file);
        fileMap.set(fileName, imageId);
        console.log(`Added new file: ${fileName}`);
      } else {
        console.log(`Reusing cached imageId for: ${fileName}`);
      }

      newImageIds.push({ imageId, fileName });
    }
    console.log("uploadedImageIds", newImageIds, fileMap);
    setImageIds(newImageIds);
  };

  return (
    <div className="flex justify-center my-4">
      <input
        type="file"
        multiple
        accept=".dcm"
        onChange={handleUpload}
        className="block w-full max-w-xs text-sm text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-gray-100 file:text-sm file:font-semibold hover:file:bg-gray-200 cursor-pointer"
      />
    </div>
  );
};

export default FileUploader;

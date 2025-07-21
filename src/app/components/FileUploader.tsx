"use client";
import React from "react";
import dicomImageLoader from "@cornerstonejs/dicom-image-loader";

const FileUploader: React.FC<{
  setImageIds: (ids: string[]) => void;
}> = ({ setImageIds }) => {
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newImageIds: string[] = [];
    for (let i = 0; i < files.length; i++) {
      if (files[i].name.endsWith(".dcm")) {
        const imageId = dicomImageLoader.wadouri.fileManager.add(files[i]);
        newImageIds.push(imageId);
      }
    }
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

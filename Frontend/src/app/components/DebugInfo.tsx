"use client";
import React from "react";

const DebugInfo: React.FC<{
  imageCount: number;
  currentSlice: number;
  activeTool: string;
}> = ({ imageCount, currentSlice, activeTool }) => (
  <div className="mx-auto mt-4 text-sm text-gray-700 bg-gray-100 rounded-md p-4 w-fit text-center">
    <p className="font-bold text-gray-800 mb-1">Debug Info:</p>
    <p>Images loaded: {imageCount}</p>
    <p>Current slice: {currentSlice + 1}</p>
    <p>Active Tool: {activeTool}</p>
  </div>
);

export default DebugInfo;

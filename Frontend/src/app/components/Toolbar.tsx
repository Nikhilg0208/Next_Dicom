"use client";
import React from "react";

const Toolbar: React.FC<{
  activeTool: string;
  onToolChange: (tool: string) => void;
  onSave: () => void;
}> = ({ activeTool, onToolChange, onSave }) => {
  return (
    <div className="flex items-center justify-center gap-4 mt-4 flex-wrap">
      <label className="text-sm font-semibold text-gray-700">
        Active Tool:
      </label>
      <select
        value={activeTool}
        onChange={(e) => onToolChange(e.target.value)}
        className="px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="StackScroll">Stack Scroll</option>
        <option value="SplineROI">Spline ROI</option>
      </select>
      <button
        onClick={onSave}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Save Image
      </button>
    </div>
  );
};

export default Toolbar;

"use client";
import React from "react";

const SliceSlider: React.FC<{
  value: number;
  max: number;
  onChange: (value: number) => void;
}> = ({ value, max, onChange }) => {
  return (
    <div className="flex flex-col items-center gap-2 mt-4 w-full">
      <label className="text-sm font-medium text-gray-700">
        Slice: {value + 1} / {max + 1}
      </label>
      <input
        type="range"
        min={0}
        max={max}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="w-3/4 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
      />
    </div>
  );
};

export default SliceSlider;

"use client";
import React from "react";

const Instructions = () => (
  <div className="bg-white shadow-md rounded-lg p-6 mt-6 w-full max-w-md mx-auto">
    <h3 className="text-lg font-semibold mb-4 text-gray-800 text-center">
      Tool Instructions
    </h3>
    <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
      <li>
        <strong>Stack Scroll:</strong> Click and drag to navigate through
        slices.
      </li>
      <li>
        <strong>Spline ROI:</strong> Click to place points, double-click to
        finish.
      </li>
    </ul>
  </div>
);

export default Instructions;

"use client";
import React, { forwardRef } from "react";

const Viewport = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="flex justify-center mt-6">
      <div
        ref={ref}
        className="w-[900px] h-[650px] border border-gray-300 bg-black"
      />
    </div>
  );
});

export default Viewport;

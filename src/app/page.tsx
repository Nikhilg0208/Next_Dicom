"use client";

import { Enums, RenderingEngine, init as coreInit } from "@cornerstonejs/core";
import {
  init as dicomImageLoaderInit,
} from "@cornerstonejs/dicom-image-loader";
import {
  SplineROITool,
  StackScrollTool,
  ToolGroupManager,
  addTool,
  Enums as csToolsEnums,
  init as toolsInit,
} from "@cornerstonejs/tools";
import React, { useEffect, useRef, useState } from "react";

import DebugInfo from "./components/DebugInfo";
import FileUploader from "./components/FileUploader";
import Instructions from "./components/Instructions";
import SliceSlider from "./components/SliceSlider";
import Toolbar from "./components/Toolbar";
import Viewport from "./components/Viewport";

import styles from "./styles/DicomViewer.module.css";

const { ViewportType } = Enums;
const { MouseBindings } = csToolsEnums;

const DicomViewer: React.FC = () => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [imageIds, setImageIds] = useState<string[]>([]);
  const [currentSlice, setCurrentSlice] = useState<number>(0);
  const [activeTool, setActiveTool] = useState<string>("StackScroll");
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  const renderingEngineRef = useRef<RenderingEngine | null>(null);
  const toolGroupRef = useRef<any>(null);

  // Initialization
  useEffect(() => {
    const init = async () => {
      await coreInit();
      await dicomImageLoaderInit();
      await toolsInit();

      addTool(StackScrollTool);
      addTool(SplineROITool);
      setIsInitialized(true);
    };
    init();
  }, []);

  // Setup Viewer
  useEffect(() => {
    if (!isInitialized || !viewportRef.current || imageIds.length === 0) return;

    const setupViewer = async () => {
      const renderingEngineId = "myRenderingEngine";
      const viewportId = "dicomViewport";
      const toolGroupId = "dicomToolGroup";

      renderingEngineRef.current?.destroy();
      try {
        ToolGroupManager.destroyToolGroup(toolGroupId);
      } catch {}

      renderingEngineRef.current = new RenderingEngine(renderingEngineId);
      const viewportInput = {
        viewportId,
        element: viewportRef.current!,
        type: ViewportType.STACK,
      };

      renderingEngineRef.current.enableElement(viewportInput);
      const viewport = renderingEngineRef.current.getViewport(viewportId);

      toolGroupRef.current = ToolGroupManager.createToolGroup(toolGroupId);
      toolGroupRef.current?.addTool(StackScrollTool.toolName);
      toolGroupRef.current?.addTool(SplineROITool.toolName);
      toolGroupRef.current?.addViewport(viewportId, renderingEngineId);

      setToolActive(activeTool);
      await viewport.setStack(imageIds, currentSlice);
      viewport.render();
    };

    setupViewer();

    return () => {
      renderingEngineRef.current?.destroy();
      try {
        ToolGroupManager.destroyToolGroup("dicomToolGroup");
      } catch {}
    };
  }, [isInitialized, imageIds]);

  const setToolActive = (toolName: string) => {
    if (!toolGroupRef.current) return;

    toolGroupRef.current.setToolPassive(StackScrollTool.toolName);
    toolGroupRef.current.setToolPassive(SplineROITool.toolName);

    const toolMap = {
      StackScroll: StackScrollTool.toolName,
      SplineROI: SplineROITool.toolName,
    };

    const tool = toolMap[toolName];
    if (tool) {
      toolGroupRef.current.setToolActive(tool, {
        bindings: [{ mouseButton: MouseBindings.Primary }],
      });
    }
  };

  const saveAnnotations = () => {
    renderingEngineRef.current?.getViewport("dicomViewport")?.render();
  };

  const handleToolChange = (tool: string) => {
    setActiveTool(tool);
    setToolActive(tool);
  };

  const handleSliceChange = async (slice: number) => {
    setCurrentSlice(slice);
    const viewport = renderingEngineRef.current?.getViewport("dicomViewport");
    await viewport?.setStack(imageIds, slice);
    viewport?.render();
  };

  return (
    <div className={styles.container}>
      <h1 className="text-2xl font-bold text-center my-4">
        DICOM Viewer with SplineROI Tool
      </h1>
      <FileUploader setImageIds={setImageIds} />
      {imageIds.length > 0 && (
        <>
          <Toolbar
            activeTool={activeTool}
            onToolChange={handleToolChange}
            onSave={saveAnnotations}
          />
          <Viewport ref={viewportRef} />
          <SliceSlider
            value={currentSlice}
            max={imageIds.length - 1}
            onChange={handleSliceChange}
          />
          <Instructions />
          <DebugInfo
            imageCount={imageIds.length}
            currentSlice={currentSlice}
            activeTool={activeTool}
          />
        </>
      )}
    </div>
  );
};

export default DicomViewer;

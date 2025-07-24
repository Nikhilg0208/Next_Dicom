"use client";

import {
  Enums,
  RenderingEngine,
  init as coreInit,
  getEnabledElement,
} from "@cornerstonejs/core";
import { init as dicomImageLoaderInit } from "@cornerstonejs/dicom-image-loader";
import {
  SplineROITool,
  StackScrollTool,
  ToolGroupManager,
  addTool,
  annotation,
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
import { fileMap } from "./utils/createRandomSplineAnnotation";

const { ViewportType } = Enums;
const { MouseBindings } = csToolsEnums;

const DicomViewer: React.FC = () => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [imageIds, setImageIds] = useState<
    { imageId: string; fileName: string }[]
  >([]);
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

      const ImageIdArray = imageIds.map((entry) => entry.imageId);
      console.log("viewing time", imageIds, currentSlice);
      console.log("viewing time", ImageIdArray, currentSlice);
      await viewport.setStack(ImageIdArray, currentSlice);
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
    try {
      const element = viewportRef.current;
      if (!element || !element.isConnected) {
        console.error("Element not found or not connected");
        return;
      }
      const splineAnnotations = annotation.state.getAnnotations(
        "SplineROI",
        element
      );
      if (!splineAnnotations || splineAnnotations.length === 0) {
        console.warn("No SplineROI annotations found.");
        return;
      }
      const enabledElement = getEnabledElement(element);
      const imageId = enabledElement?.viewport?.getCurrentImageId?.();
      // console.log("image id which you draw", imageId);
      // console.log("splineAnnotations", splineAnnotations);
      const matched = imageIds.find((entry) => entry.imageId === imageId);
      if (!matched) {
        console.error("Filename not found for imageId:", imageId);
        return;
      }

      const { fileName } = matched;
      const storageKey = `annotations_${fileName}`;
      if (localStorage.getItem(storageKey)) {
        localStorage.removeItem(storageKey);
      }

      localStorage.setItem(storageKey, JSON.stringify(splineAnnotations));
    } catch (error) {
      console.error("Error getting annotations:", error);
    }
  };

  const handleToolChange = (tool: string) => {
    setActiveTool(tool);
    setToolActive(tool);
  };

  const handleSliceChange = async (slice: number) => {
    setCurrentSlice(slice);
    const viewport = renderingEngineRef.current?.getViewport("dicomViewport");
    const ImageIdArray = imageIds.map((entry) => entry.imageId);
    console.log("handleSliceChange", ImageIdArray, slice);
    await viewport?.setStack(ImageIdArray, slice);
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

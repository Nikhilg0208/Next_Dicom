// import { annotation } from "@cornerstonejs/tools";

// export const createRandomSplineAnnotation = (
//   viewport: any,
//   imageId: string,
//   annotationUID: string = `spline_${Date.now()}`
// ) => {
//   const element = viewport.element;

//   const canvas = element.querySelector("canvas");
//   const canvasWidth = canvas?.width || 512;
//   const canvasHeight = canvas?.height || 512;

//   const centerX = canvasWidth / 2;
//   const centerY = canvasHeight / 2;

//   const radius = 50;
//   const points = [];

//   const numPoints = 16;
//   for (let i = 0; i < numPoints; i++) {
//     const angle = (2 * Math.PI * i) / numPoints;
//     const jitter = 10;
//     const x =
//       centerX + (radius + (Math.random() - 0.5) * jitter) * Math.cos(angle);
//     const y =
//       centerY + (radius + (Math.random() - 0.5) * jitter) * Math.sin(angle);

//     const world = viewport.canvasToWorld([x, y]);
//     points.push([world[0], world[1], world[2] || 0]);
//   }

//   const splineAnnotation = {
//     annotationUID,
//     metadata: {
//       toolName: "SplineROI",
//       referencedImageId: imageId,
//       FrameOfReferenceUID:
//         viewport.getFrameOfReferenceUID?.() || "defaultFrameOfReference",
//       viewPlaneNormal: viewport.getViewPlaneNormal?.() || [0, 0, -1],
//       viewUp: viewport.getViewUp?.() || [0, -1, 0],
//     },
//     data: {
//       handles: {
//         points,
//         activeHandleIndex: null,
//         textBox: {
//           hasMoved: false,
//           worldPosition: points[0],
//           worldBoundingBox: {
//             topLeft: points[0],
//             topRight: points[0],
//             bottomLeft: points[0],
//             bottomRight: points[0],
//           },
//         },
//       },
//       closed: true,
//       cachedStats: {},
//     },
//   };

//   annotation.state.addAnnotation(splineAnnotation, element);
// };

import { config } from "dotenv";
import express from "express";
import morgan from "morgan";
import cors from "cors";

import { prisma } from "./prisma/index.js";

config({
  path: "./.env",
});

const port = process.env.PORT || 4000;

const clientURL = process.env.CLIENT_URL || "";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use(
  cors({
    origin: [clientURL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("API Working with /api/v1");
});

// Using Routes
app.get("/api/v1/get-annotation", async (req, res) => {
  const { imageId } = req.query;
  console.log("🚀 ~ imageId:", imageId);

  if (!imageId || typeof imageId !== "string") {
    return res.status(400).json({
      success: false,
      message: "Missing or invalid 'imageId' query parameter",
    });
  }

  try {
    const annotations = await prisma.dicom.findMany({
      where: {
        fileName: imageId,
      },
      include: {
        points: true,
      },
    });
    console.log("Fetched annotation for imageId:", annotations);
    if (!annotations) {
      return res.status(200).json({ success: true, data: null });
    }

    // Revert the points transformation to send back an array of coordinates
    // const responseData = {
    //   ...annotation,
    //   points: annotation.map((ann) => ann.point.coords),
    // };

    const formattedAnnotations = annotations.map((annotation) => ({
      ...annotation,
      points: annotation.points.map((point) => point.coords),
    }));

    res.status(200).json({ success: true, data: formattedAnnotations });
  } catch (err) {
    console.error("Error fetching annotations:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

app.post("/api/v1/add-annotation", async (req, res) => {
  try {
    const { annotations } = req.body;
    if (!annotations || !Array.isArray(annotations)) {
      return res.status(400).json({
        success: false,
        message: "Request body must contain an 'annotations' array.",
      });
    }

    // Validate all annotations before starting the transaction
    for (const ann of annotations) {
      if (
        !ann.imageId ||
        !ann.FrameOfReferenceUID ||
        !ann.annotationUID ||
        !ann.toolName ||
        !ann.fileName ||
        !ann.points ||
        !Array.isArray(ann.points)
      ) {
        return res.status(400).json({
          success: false,
          message: `Missing or invalid fields for annotation UID ${
            ann.annotationUID || "N/A"
          }`,
        });
      }
    }

    const transactionOperations = annotations.map((annotation) => {
      const {
        imageId,
        FrameOfReferenceUID,
        annotationUID,
        toolName,
        fileName,
        points,
      } = annotation;

      const formattedPoints = points.map((pt) => ({ coords: pt }));

      // Use upsert to either create a new annotation or update an existing one.
      return prisma.dicom.upsert({
        where: { annotationUID },
        update: {
          imageId,
          FrameOfReferenceUID,
          toolName,
          fileName,
          points: {
            deleteMany: {}, // Delete old points
            create: formattedPoints, // Create new points
          },
        },
        create: {
          imageId,
          FrameOfReferenceUID,
          annotationUID,
          toolName,
          fileName,
          points: {
            create: formattedPoints,
          },
        },
        include: {
          points: true,
        },
      });
    });

    const savedAnnotations = await prisma.$transaction(transactionOperations);

    res.status(201).json({ success: true, data: savedAnnotations });
  } catch (err) {
    console.error("Error creating/updating annotations:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});
app.listen(port, () => {
  console.log(`Express is working on http://localhost:${port}`);
});

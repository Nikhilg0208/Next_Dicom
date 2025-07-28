import { config } from "dotenv";
import express from "express";
import morgan from "morgan";
import cors from "cors";

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

  if (!imageId || typeof imageId !== "string") {
    return res.status(400).json({
      success: false,
      message: "Missing or invalid 'imageId' query parameter",
    });
  }

  try {
    const annotations = await prisma.dicom.findunique({
      where: {
        imageId: imageId,
      },
      include: {
        points: true,
      },
    });

    res.status(200).json({ success: true, data: annotations });
  } catch (err) {
    console.error("Error fetching annotations:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

app.post("/api/v1/add-annotation", async (req, res) => {
  try {
    const { imageId, FrameOfReferenceUID, annotationUID, toolName, points } =
      req.body;

    const newAnnotation = await prisma.dicom.create({
      data: {
        imageId,
        FrameOfReferenceUID,
        annotationUID,
        toolName,
        points: {
          create: points,
        },
      },
      include: {
        points: true,
      },
    });

    res.status(201).json({ success: true, data: newAnnotation });
  } catch (err) {
    console.error("Error creating annotation:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});
app.listen(port, () => {
  console.log(`Express is working on http://localhost:${port}`);
});

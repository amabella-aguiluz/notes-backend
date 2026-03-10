import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import apiLimiter from "./middlewares/apiLimiter";

import authRouter from "./routes/auth.routes";
import notesRouter from "./routes/notes.routes";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", apiLimiter({ max: 10, windowMinutes: 10 }), authRouter);   
app.use("/notes", apiLimiter({ max: 100, windowMinutes: 15 }), notesRouter);

// app.use("/auth" authRouter);   
// app.use("/notes", notesRouter);

app.use((req, res) => {
  console.log("Unmatched route:", req.method, req.url);
  res.status(404).send(`Cannot ${req.method} ${req.url}`);
});

export default app;
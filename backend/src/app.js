import express from "express";

import authRouter from "./routes/auth.routes.js";
import studentRouter from "./routes/student.routes.js";

const app = express();

app.use(express.json());

app.use("/auth", authRouter);
app.use("/students", studentRouter);

export default app;
import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { transactionRoutes } from "./core/routes/index";

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use("/transaction", transactionRoutes);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res
    .status(err.status || 500)
    .json({ error: err.message || "Internal Server Error" });
});

app.listen(port, () => {
  console.log(`Server started successfully at http://localhost:${port}`);
});

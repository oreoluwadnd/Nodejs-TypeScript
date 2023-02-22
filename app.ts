import express, { Request, Response, Express } from "express";
import dotenv from "dotenv";


// Load env vars
dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

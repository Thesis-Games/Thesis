import express, { Application } from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb-connection";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middleware/error-handler";
import authenticationRouter from "./routes/authentication-route";
import leaderBoardRoute from "./routes/leader-board-route";
import questionRoute from "./routes/question-route";
const app: Application = express();
const PORT = 3000;
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api", authenticationRouter);
app.use("/api/leaderboard", leaderBoardRoute);
app.use("/api/question-answer", questionRoute);

app.use(errorHandler);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

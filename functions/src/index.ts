import * as functions from "firebase-functions";
import * as express from "express";
import { Express } from "express";
import { DocumentRouter } from "./routers";
import * as cors from "cors";

const app: Express = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "https://gojaebeom.github.io"],
    credentials: true,
  })
);

app.use("/documents", DocumentRouter);

exports.api = functions.region("asia-northeast3").https.onRequest(app);

import * as functions from "firebase-functions";
import { Express } from "express";
import * as express from "express";
import { readdir } from "fs";

const app: Express = express();

app.get("/", async (req, res) => {
  console.debug("helloWorld!");
  readdir("drafts/java", (err, files) => {
    if (err) {
      console.debug(err);
    }
    console.debug(files);
    res.send("hello world");
  });
});

exports.helloWorld = functions.region("asia-northeast3").https.onRequest(app);

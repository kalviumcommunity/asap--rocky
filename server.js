import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./router/routes.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use("/ping", router);

app.listen(3000, () => {
  console.log("listening on port 3000");
});

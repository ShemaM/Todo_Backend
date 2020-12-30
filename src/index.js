/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import express from "express";
import "@babel/polyfill";
import morgan from "morgan";
import { config } from "dotenv";
import routes from "./routes/index";

const app = express();
config();

app.use(morgan("dev"));
app.use(express.json());

app.use("/", routes);

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server started on Port ${PORT}`));

export default app;

import express from "express"
import { PORT } from "./config/secret";

const app = express();

app.listen(PORT, () => { console.info(`Application started at port ${PORT} successfully!`) });
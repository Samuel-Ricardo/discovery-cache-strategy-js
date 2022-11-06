import express from "express"
import router from "routes/app_routes";
import { PORT } from "./config/secret";
import {expiredCacheCleaner} from "./jobs/cache_cleaner"

const app = express();

expiredCacheCleaner();

app.use(router)
app.listen(PORT, () => { console.info(`Application started at port ${PORT} successfully!`) });
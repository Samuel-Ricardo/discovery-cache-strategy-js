import { createClient } from "@redis/client";
import { REDIS_URL } from "config/secret";

const redis = createClient({
    url: `redis://${REDIS_URL}`
})
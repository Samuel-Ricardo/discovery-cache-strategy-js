import { createClient } from "@redis/client";
import { REDIS_URL } from "config/secret";

const redis = createClient({url: `redis://${REDIS_URL}`})

redis.on("error", (error) => console.error("Redis Client error", error))
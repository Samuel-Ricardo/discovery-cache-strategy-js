import { ICacheActions } from "@type";
import { local_cache_actions } from "cache/local_cache";
import { REDIS_ENABLED } from "config/secret";

export const cache_actions:ICacheActions<any> | null = REDIS_ENABLED? null : local_cache_actions;
import { ICacheActions } from "@type";
import { TIME_TO_LEAVE } from "config/secret";
import { redis } from "database/redis/client";
import { get, getAll, save, remove } from "database/redis/operations";
import {getExpirationTime} from "../utils/times"

const redis_actions: ICacheActions<any> = {
    save: async (key, value) => JSON.parse(String((await save(key, value))!)),
    get,
    async getAll(){ return (await getAll())},
    exists: async key => !!(await get(key)),
    remove: async (key) => await !!remove(key),
    getExpirationTime
}

import { TIME_TO_LEAVE } from "config/secret"
import { redis } from "./client"

export const save = async (key: any, value: any) => {
    
    try { return await redis.set(key, value, {EX: TIME_TO_LEAVE}) }
    
    catch (error){ console.error("Erro on try to save data in Redis", error) }
}

export const get = async (key: any) => await redis.get(key);
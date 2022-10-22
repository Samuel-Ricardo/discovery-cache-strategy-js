import { TIME_TO_LEAVE } from "config/secret"
import { redis } from "./client"

export const save = async (key: any, value: any) => {
    
    try { await redis.set(key, value, {EX: TIME_TO_LEAVE}) }
    
    catch (error){ console.error("Erro on try to save data in Redis", error) }
}


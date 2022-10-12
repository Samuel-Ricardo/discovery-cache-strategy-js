import { ICache } from "@type"
import { TIME_TO_LEAVE } from "config/secret"

const CACHE = new Map<string, ICache<any>>()

//const sync = (cache:Map<string, ICache<any>>) => CACHE = cache;

export const save = (key: string, value: any, override?: boolean) => {
    
    const cache:ICache<any> = {
        value,
        expire: getExpirationTime()
    }

    if(exists(key)) override? CACHE.set(key, cache) : null
    
    CACHE.set(key, cache);
}


export const get = (key: string) => isAble(key)? CACHE.get(key) : null 

export const exists = (key: string) => CACHE.has(key) 

export const remove = (key: string) => CACHE.delete(key)

export const isAble = (key: string) => !isExpired(key) && exists(key)

export const isExpired = (key: string) => {
    const data = CACHE.get(key);
    if(!data) return true;

    const expired = new Date() > data.expire
    if (expired) remove(key)

    return expired;
}

function getExpirationTime(): Date {
    const now = new Date()
    now.setSeconds(now.getSeconds() + TIME_TO_LEAVE); 
    return now;
}

export const removeExpiredKeys = () => Array.from(CACHE.keys())
                                            .filter(key => isExpired(key))
                                            .forEach(key => remove(key))
import { ICache } from "@type"

const CACHE = new Map<string, ICache<any>>()

//const sync = (cache:Map<string, ICache<any>>) => CACHE = cache;

export const save = (key: string, value: any, override: boolean) => {
    
    const cache:ICache<any> = {
        value
        expire: getExpirationTime()
    }

    if(exists(key)) override? CACHE.set(key, cache) : undefined
    
    CACHE.set(key, cache);
}


export const get = (key: string) => isAble(key)? CACHE.get(key) : undefined 

export const exists = (key: string) => CACHE.has(key) 

export const remove = (key: string) => CACHE.delete(key)

export const isAble = (key: string) => !isExpired(key) && exists(key)

export const isExpired = (key: string) => {
    const expired = new Date() > CACHE.get(key).expire;

    if (expired) remove(key)

    return expired;
}
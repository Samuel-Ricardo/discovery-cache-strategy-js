import { ICacheItem, ICacheActions } from "@type"
import { TIME_TO_LEAVE } from "config/secret"
import { getExpirationTime } from "utils/times"

const LOCAL_CACHE = new Map<string, ICacheItem<any>>()

//const sync = (cache:Map<string, ICache<any>>) => CACHE = cache;

 const save = (key: string, value: any, override?: boolean) => {
    
    const cache:ICacheItem<any> = {
        value,
        expire: getExpirationTime()
    }

    if(exists(key)) return override? LOCAL_CACHE.set(key, cache) : null
    
    LOCAL_CACHE.set(key, cache);
}


 const get = (key: string) => isAble(key)? LOCAL_CACHE.get(key) : null 

 const getAll = () => LOCAL_CACHE;

 const exists = (key: string) => LOCAL_CACHE.has(key) 

 const remove = (key: string) => LOCAL_CACHE.delete(key)

 const isAble = (key: string) => !isExpired(key) && exists(key)

 const isExpired = (key: string) => {
    const data = LOCAL_CACHE.get(key);
    if(!data) return true;

    const expired = new Date() > data.expire
    if (expired) remove(key)

    return expired;
}

 const removeExpiredKeys = () => Array.from(LOCAL_CACHE.keys())
                                            .filter(key => isExpired(key))
                                            .forEach(key => remove(key))
 
                                            
 export const local_cache_actions:ICacheActions<any> = {
    save,
    get,
    getAll,
    exists,
    getExpirationTime,
    isAble,
    isExpired,
    remove,
    removeExpiredKeys
}
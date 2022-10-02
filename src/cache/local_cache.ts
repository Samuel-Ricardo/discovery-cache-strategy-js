const CACHE = new Map<string, any>()

export const isExpired = (key: string) => {
    const expired = new Date() > CACHE.get(key).expire;

    if (expired) remove(key)

    return expired;
}

export const exists = (key: string) => CACHE.has(key) 

export const remove = (key: string) => CACHE.delete(key)

export const isAble = (key: string) => !isExpired(key) && exists(key)
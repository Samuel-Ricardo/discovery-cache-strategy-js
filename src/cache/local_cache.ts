const CACHE = new Map<string, any>()

export const isExpired = (key: string) => {
    const expired = new Date() > CACHE.get(key).expire;

    if (expired) remove(key)

    return expired;
}

export const exists = (key: string) =>  !isExpired(key) && CACHE.has(key) 
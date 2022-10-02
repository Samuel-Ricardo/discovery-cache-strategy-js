const CACHE = new Map<string, any>()

export const isExpired = (key: string) => new Date() > CACHE.get(key).expire;
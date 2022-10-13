import { ICacheItem } from "./cache_item";

 interface ICache<T> {

  CACHE: Map<string, ICacheItem<T>>

  save: (key: string, value: T, override?: boolean) => void | null | ICacheItem<T>;

  get: (key: string) => ICache | null 

  exists: (key: string) => boolean 

  remove: (key: string) => boolean

  isAble: (key: string) => boolean

  isExpired: (key: string) => boolean

  getExpirationTime: () => Date 

  removeExpiredKeys: () => void | ICacheItem<T>
}
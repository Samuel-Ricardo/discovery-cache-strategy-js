import { ICacheItem } from "./cache_item";

 export interface ICache<T> {

  save: (key: string, value: T, override?: boolean) => any

  get: (key: string) => ICache | null 

  exists: (key: string) => boolean 

  remove: (key: string) => boolean

  isAble: (key: string) => boolean

  isExpired: (key: string) => boolean

  getExpirationTime: () => Date 

  removeExpiredKeys: () => void | ICacheItem<T>
}
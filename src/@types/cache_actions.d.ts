import { ICacheItem } from "./cache_item";

 export interface ICacheActions<T> {

  save: (key: string, value: T, override?: boolean) => any

  get: (key: string) => ICacheActions | null 

  getAll: () => Map<string, ICacheItem<T>>

  exists: (key: string) => boolean 

  remove: (key: string) => boolean

  isAble: (key: string) => boolean

  isExpired: (key: string) => boolean

  getExpirationTime: () => Date 

  removeExpiredKeys: () => void | ICacheItem<T>
}
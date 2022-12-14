import { ICacheItem } from "./cache_item";

 export interface ICacheActions<T> {

  save: (key: string, value: T, override?: boolean) => any

  get: (key: string) => ICacheActions | any 

  getAll: () => Map<string, ICacheItem<T>> | Promise<Promise<string | null>[] | undefined>

  exists: (key: string) => boolean | Promise <boolean> 

  remove: (key: string) => boolean | Promise <boolean>

  isAble?: (key: string) => boolean

  isExpired?: (key: string) => boolean

  getExpirationTime: () => Date 

  removeExpiredKeys?: () => void | ICacheItem<T>
}
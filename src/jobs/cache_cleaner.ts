import { removeExpiredKeys } from 'cache/local_cache'
import { CACHE_SCHEDULER } from 'config/secret'
import schedule from 'node-schedule'

export const expiredCacheCleaner = () => schedule.scheduleJob(CACHE_SCHEDULER, () => removeExpiredKeys())

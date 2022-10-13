import { local_cache_actions as _ } from 'cache/local_cache'
import { CACHE_SCHEDULER } from 'config/secret'
import schedule from 'node-schedule'

export const expiredCacheCleaner = () => schedule.scheduleJob(CACHE_SCHEDULER, () => _.removeExpiredKeys())

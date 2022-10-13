import {local_cache_actions} from 'cache/local_cache'
import { CACHE_SCHEDULER } from 'config/secret'
import schedule from 'node-schedule'

const _ = local_cache_actions

export const expiredCacheCleaner = () => schedule.scheduleJob(CACHE_SCHEDULER, () => _.removeExpiredKeys())

import { LRUCache } from 'typescript-lru-cache'

import { MAX_NUMBER } from '../server'

const cache = new LRUCache<number, bigint>({ maxSize: MAX_NUMBER })

export default cache

import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.cgg,
    earningToken: tokens.cgg,
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '1',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 1,
    stakingToken: tokens.ali,
    earningToken: tokens.cgg,
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '1',
    sortOrder: 2,
    isFinished: false,
  },
]

export default pools

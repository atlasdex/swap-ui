// Block

import BigNumber from "bignumber.js";
import { PoolConfig } from "config/constants/types";

export interface BlockState {
  currentBlock: number
  initialBlock: number
}
// POOL

export interface Pool extends PoolConfig {
  totalStaked?: number
  startBlock?: number
  endBlock?: number
  userData?: {
    allowance: BigNumber
    stakingTokenBalance: BigNumber
    stakedBalance: BigNumber
    pendingReward: BigNumber
  }
}

export interface PoolsState {
  data: Pool[]
}
// Global state

export interface State {
  pools: PoolsState
  block: BlockState
}

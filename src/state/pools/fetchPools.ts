import poolsConfig from 'config/constants/pools'
import cgChefAbi from 'config/abi/cgChef.json'
import multicall from 'utils/multicall'
import {  getCGChefAddress } from 'utils/addressHelpers'
import BigNumber from 'bignumber.js'
import { getFullDisplayBalance } from 'utils/formatBalance'

export const fetchPoolsPublicInfo = async () => {
  const poolInfoCalls = poolsConfig.map((poolConfig) => {
    return {
      address:getCGChefAddress(),
      name: 'poolInfo',
      params: [poolConfig.sousId],
    }
  })

  const poolInfo = await multicall(cgChefAbi, poolInfoCalls)


  return poolsConfig.map((pool, index) => {
    return {
      sousId: pool.sousId,
      startBlock: poolInfo[index][6].toNumber(),
      endBlock: poolInfo[index][7].toNumber(),
      tokenPerBlock: getFullDisplayBalance(new BigNumber(poolInfo[index][2].toString())),
      totalStaked: getFullDisplayBalance(new BigNumber(poolInfo[index][3].toString()))
    }
  })
}


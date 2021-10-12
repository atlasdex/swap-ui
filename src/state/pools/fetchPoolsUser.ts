import poolsConfig from 'config/constants/pools'
import cgChefAbi from 'config/abi/cgChef.json'
import erc20ABI from 'config/abi/erc20.json'
import multicall from 'utils/multicall'
import { getAddress, getCGChefAddress } from 'utils/addressHelpers'
import BigNumber from 'bignumber.js'


export const fetchPoolsAllowance = async (account) => {
  const calls = poolsConfig.map((p) => ({
    address: getAddress(p.stakingToken.address),
    name: 'allowance',
    params: [account, getCGChefAddress()],
  }))

  const allowances = await multicall(erc20ABI, calls)
  return poolsConfig.reduce(
    (acc, pool, index) => ({ ...acc, [pool.sousId]: new BigNumber(allowances[index]).toJSON() }),
    {},
  )
}

export const fetchUserBalances = async (account) => {
  const calls = poolsConfig.map((p) => ({
    address: getAddress(p.stakingToken.address),
    name: 'balanceOf',
    params: [account],
  }))
  const tokenBalancesRaw = await multicall(erc20ABI, calls)
  const tokenBalances = poolsConfig.reduce(
    (acc, pool, index) => ({ ...acc, [pool.sousId]: new BigNumber(tokenBalancesRaw[index]).toJSON() }),
    {},
  )
  return { ...tokenBalances }
}

export const fetchUserStakeBalances = async (account) => {
  const calls = poolsConfig.map((p) => ({
    address: getCGChefAddress(),
    name: 'userInfo',
    params: [p.sousId, account],
  }))
  const userInfo = await multicall(cgChefAbi, calls)
  const stakedBalances = poolsConfig.reduce(
    (acc, pool, index) => ({
      ...acc,
      [pool.sousId]: new BigNumber(userInfo[index].amount._hex).toJSON(),
    }),
    {},
  )

  return { ...stakedBalances}
}

export const fetchUserPendingRewards = async (account) => {
  const calls = poolsConfig.map((p) => ({
    address: getCGChefAddress(),
    name: 'pendingReward',
    params: [p.sousId, account],
  }))
  const res = await multicall(cgChefAbi, calls)
  const pendingRewards = poolsConfig.reduce(
    (acc, pool, index) => ({
      ...acc,
      [pool.sousId]: new BigNumber(res[index]).toJSON(),
    }),
    {},
  )

  return { ...pendingRewards}
}

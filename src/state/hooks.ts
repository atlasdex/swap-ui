import { useEffect } from 'react'
import { useAppDispatch } from 'state'
import useRefresh from 'hooks/useRefresh'
import { fetchPoolsPublicDataAsync, fetchPoolsUserDataAsync, setBlock } from './actions'
import { Pool, State } from './types'
import { useSelector } from 'react-redux'
import { getWeb3NoAccount } from 'utils/web3'


export const useFetchPublicData = () => {
  const dispatch = useAppDispatch()
  const { slowRefresh } = useRefresh()
  useEffect(() => {
    dispatch(fetchPoolsPublicDataAsync())

  }, [dispatch, slowRefresh])

  useEffect(() => {
    const web3 = getWeb3NoAccount()
    const interval = setInterval(async () => {
      const blockNumber = await web3.eth.getBlockNumber()
      dispatch(setBlock(blockNumber))
    }, 13000)

    return () => clearInterval(interval)
  }, [dispatch])
} // end of use Fetch Public Data

// Pools

export const usePools = (account): Pool[] => {
  const { fastRefresh } = useRefresh()
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (account) {
      dispatch(fetchPoolsUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const pools = useSelector((state: State) => state.pools.data)
  return pools
}

export const usePoolFromPid = (sousId): Pool => {
  const pool = useSelector((state: State) => state.pools.data.find((p) => p.sousId === sousId))
  return pool
}



// Block
export const useBlock = () => {
  return useSelector((state: State) => state.block)
}

export const useInitialBlock = () => {
  return useSelector((state: State) => state.block.initialBlock)
}
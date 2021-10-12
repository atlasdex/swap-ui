import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useAppDispatch } from 'state'
import {  updateUserStakedBalance, updateUserBalance } from 'state/actions'
import {   sousStake } from 'utils/callHelpers'
import { useCGChef } from './useContract'


const useSousStake = (sousId) => {
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()
  const sousCGChefContract = useCGChef()

  const handleStake = useCallback(
    async (amount: string, decimals: number) => {
      await sousStake(sousCGChefContract, amount, decimals, account, sousId)
      dispatch(updateUserStakedBalance(sousId, account))
      dispatch(updateUserBalance(sousId, account))
    },
    [account, dispatch, sousCGChefContract, sousId],
  )

  return { onStake: handleStake }
}

export default useSousStake

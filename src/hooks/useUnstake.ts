import { useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import { useAppDispatch } from "state";
import {
  updateUserStakedBalance,
  updateUserBalance,
  updateUserPendingReward,
} from "state/actions";
import { sousUnstake } from "utils/callHelpers";
import { useCGChef } from "./useContract";

export const useSousUnstake = (sousId) => {
  const dispatch = useAppDispatch();
  const { account } = useWeb3React();
  const sousChefContract = useCGChef();

  const handleUnstake = useCallback(
    async (amount: string, decimals: number) => {
      const txHash = await sousUnstake(
        sousChefContract,
        amount,
        decimals,
        account,
        sousId,
      );
      console.info(txHash);
      dispatch(updateUserStakedBalance(sousId, account));
      dispatch(updateUserBalance(sousId, account));
      dispatch(updateUserPendingReward(sousId, account));
    },
    [account, dispatch, sousChefContract, sousId],
  );

  return { onUnstake: handleUnstake };
};

export default useSousUnstake;

import { useWeb3React } from "@web3-react/core";
import BigNumber from "bignumber.js";
import { Flex } from "components/Box";
import { useSousApprove } from "hooks/useApprove";
import useAuth from "hooks/useAuth";
import { useERC20 } from "hooks/useContract";
import useSousStake from "hooks/useStake";
import useSousUnstake from "hooks/useUnstake";
import React, { useState } from "react";
import { Pool } from "state/types";
import styled from "styled-components";
import { getAddress } from "utils/addressHelpers";
import { getFullDisplayBalance } from "utils/formatBalance";
const Button = styled.button`
background-color: blue;
color: white;
padding: 5px 15px;
border-radius: 5px;
outline: 0;
text-transform: uppercase;
margin: 10px 0px;
cursor: pointer;
box-shadow: 0px 2px 2px lightgray;
transition: ease background-color 250ms;

&:disabled {
  cursor: default;
  opacity: 0.7;
}
`

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: black;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;
interface IProp {
    pool: Pool
}
const PoolCard: React.FC<IProp> = ({ pool }) => {
    const stakingTokenContract = useERC20(pool.stakingToken.address ? getAddress(pool.stakingToken.address) : '')
    const { onApprove } = useSousApprove(stakingTokenContract, pool.sousId)
    const { login } = useAuth()
    const { account } = useWeb3React()
    const [stakeAmount, setStakeAmount] = useState('')
    const { onStake } = useSousStake(pool.sousId)
    const { onUnstake } = useSousUnstake(pool.sousId)

    return (
        <Flex flexDirection="column" mr={['8px', 0]} key={pool.sousId}>
            <p>{`POOL ID: ${pool.sousId}`}</p>
            <p>{`Staking Token:  ${pool.stakingToken.symbol}`}</p>
            <p>{`Reward Token:  ${pool.earningToken.symbol}`}</p>
            <p>{`Start Block:  ${pool.startBlock}`}</p>
            <p>{`End Block:  ${pool.endBlock}`}</p>
            <p>{`Total Staked:  ${pool.totalStaked}`}</p>
            <p>{`Reward Per Block:  ${pool.tokenPerBlock}`}</p>
            <p>-------------------USER INFO------------------</p>
            <p>{`Your Staking Token Balance:  ${pool.userData ? getFullDisplayBalance(new BigNumber(pool.userData.stakingTokenBalance.toString())) : 0}`}</p>
            <p>{`Your Staked On Pool:  ${pool.userData ? getFullDisplayBalance(new BigNumber(pool.userData.stakedBalance.toString())) : 0}`}</p>
            <p>{`Your Pending Reward On Pool:   ${pool.userData ? getFullDisplayBalance(new BigNumber(pool.userData.pendingReward.toString())) : 0}`}</p>
            {
                !account ?
                    <Button onClick={() => {
                        login()
                    }}>Connect Metamask</Button>
                    :
                    !pool.userData ?
                        <p>Loading...</p>
                        :
                        pool.userData.allowance.toString() === "0" ?
                            <Button onClick={async () => {
                                console.log("CLICK")
                                const txHash = await onApprove()
                                if (txHash) {
                                    console.log(`Contract Enabled. You can now stake in the pool!`)
                                } else {
                                    // user rejected tx or didn't go thru
                                    console.log(`Error. Please try again. Confirm the transaction and make sure you are paying enough gas!`)
                                }
                            }}>Approve Contract</Button>
                            :
                            <Flex flexDirection="column" mr={['8px', 0]}>
                                <Input placeholder="Numeric" type="number" value={stakeAmount}
                                    onChange={(event) => {
                                        const inputValue = event.target.value || '0'
                                        setStakeAmount(inputValue)
                                    }} />
                                <Flex flexDirection="row" mr={['8px', 0]}>
                                    <Button onClick={async () => {
                                        
                                        try {
                                            // staking
                                            await onStake(stakeAmount, pool.stakingToken.decimals)
                                            console.log(`Staked. Your ${pool.stakingToken.symbol} funds have been staked in the pool!`)
                                          } catch (e) {
                                            console.error('Canceled. Please try again and confirm the transaction.', e)
                                          }
                                    }}>Stake</Button>
                                    <Button onClick={async () => {
                                        await onUnstake(stakeAmount, pool.stakingToken.decimals)
                                        console.log("CLICK")
                                    }}>UnStake</Button>
                                </Flex>

                            </Flex>
            }
        </Flex>
    )
}


export default PoolCard

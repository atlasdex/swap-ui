import { useWeb3React } from '@web3-react/core'
import { Flex } from 'components/Box'
import FlexLayout from 'components/layout/Flex'
import React from 'react'
import {  usePools } from 'state/hooks'
import PoolCard from './components/PoolCard'

const Home: React.FC = () => {
  // const { currentBlock } = useBlock()
  const { account } = useWeb3React()
  const pools = usePools(account)

  return (

    <Flex flexDirection="column" mr={['8px', 0]}>

      <FlexLayout >
        {
          pools.map(pool => {

            return (
                <PoolCard pool={pool} key={pool.sousId}/>
              )
          })
        }
      </FlexLayout>
    </Flex>
  )
}

export default Home

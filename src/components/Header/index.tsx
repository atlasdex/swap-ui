import { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import useAuth from 'hooks/useAuth'
import styled from 'styled-components'


const ControlContainer = styled.div`
  width: 100%;
  height: 10%;
  background-color: ${({ theme }) => {
    return theme.colors.primary
  }};
`
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
export default function Header() {
  const { login, logout } = useAuth()
  const [buttonText, setButtonText] = useState<'CONNECT' | 'LOGOUT'>('CONNECT')
  const { account, chainId } = useWeb3React()

  useEffect(() => {
    if (account) {
      setButtonText('LOGOUT')
    } else {
      setButtonText('CONNECT')
    }
  }, [account, chainId])
  return (
    <ControlContainer>
      <p>{`YOUR ACCOUNT : ${account}`}</p>

      <p>{`YOUR Network : ${chainId} ${Number(chainId) !== 4 ? '(PLEASE CONNECT RINKEBY NETWORK)': '' } `}</p>
      <Button onClick={() => {
        console.log("CLICK")
        if (Object.is(buttonText, 'CONNECT')) {
          setButtonText('LOGOUT')
          login()
        } else {
          setButtonText('CONNECT')
          logout()
        }
      }}>{buttonText}</Button>
    </ControlContainer>
  )
}

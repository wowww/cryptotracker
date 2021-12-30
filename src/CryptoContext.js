import React, { createContext, useContext, useEffect, useState } from 'react'

const Crypto = createContext()

const CryptoContext = ({ children }) => {
  const [ currency, setCurrency ] = useState("KRW")
  const [ symbol, setSymbol ] = useState('₩')

  useEffect(() => {
    if ( currency === 'KRW' ) setSymbol('₩')
    else if ( currency === 'USD' ) setSymbol('$')
  }, [])


  return (
    <Crypto.Provider>
      {children}
    </Crypto.Provider>
  )
}

export default CryptoContext

export const CryptoState = () => {
  return useContext(Crypto)
}
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { CryptoState } from '../CryptoContext'
import { SingleCoin } from '../config/api'

const CoinPage = () => {
  const { id } = useParams()
  const [coin, setCoin] = useState()

  const { currency, symbol } = CryptoState();

  const fetchCoins = async() => {
    const { data } = await axios.get(SingleCoin(id))

    setCoin(data)
  }

  useEffect(() => {
    fetchCoins()

  },[])

  return (
    <div>
      
    </div>
  )
}

export default CoinPage

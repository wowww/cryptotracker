import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { CryptoState } from '../CryptoContext'
import { SingleCoin } from '../config/api'
import ReactHtmlParser from 'react-html-parser';
import CoinInfo from '../components/CoinInfo'
import { makeStyles, Typography } from '@material-ui/core'

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

  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      paddingTop: 100,
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
      },
    },
    sidebar: {
      width: "30%",
      [theme.breakpoints.down("md")]: {
        width: "100%",
        borderRight: "none",
      },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 25,
      borderRight: "2px solid grey",
    },
    heading: {
      fontWeight: "bold",
      marginBottom: 20,
      fontFamily: "Montserrat",
    },
    description: {
      width: "100%",
      fontFamily: "Montserrat",
      padding: 25,
      paddingBottom: 15,
      paddingTop: 0,
      textAlign: "justify",
    },
  }))

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <img 
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{marginBottom: 20}}
        />
        <Typography variant="h3" className={classes.heading}>
          {coin?.name}
        </Typography>
        <Typography variant="subtitle1" className={classes.description}>
          {ReactHtmlParser(coin?.description.en.split(". ")[0])}.
        </Typography>
      </div>
      <CoinInfo coin={coin} />
    </div>
  )
}

export default CoinPage

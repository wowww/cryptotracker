import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import axios from 'axios'
import { Link } from "react-router-dom";
import { CryptoState } from '../../CryptoContext'
import { TrendingCoins } from '../../config/api'
import AliceCarousel from 'react-alice-carousel';

const useStyles = makeStyles(() => ({
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  }
}))

const Carousel = () => {
  const [ trending, setTrending ] = useState([])
  const classes = useStyles()
  const { currency } = CryptoState();

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency))
    
    setTrending(data)
  }

  console.log(trending)

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency])

  const items = trending.map((coin) => {
    let profit = coin.price_change_percentage_24h >= 0;
    return (
      <Link
        className={classes.carouselItem}
        to={`/coin/${coin.id}`}
      >
        <img 
          src={coin?.image}
          alt={coin.name}
          height="80"
          style={{marginBottom: 10}}
        />
        <span>
          {coin?.symbol} &nbsp;
          <span>{profit && "+"} {coin?.price_change_percentage_24h?.toFixed(2)}%</span>
        </span>
      </Link>
    )
  })

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <div className={classes.carousel}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </div>
  )
}

export default Carousel
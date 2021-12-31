import React, { createRef } from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import Header from './components/Header'
import Homepage from './pages/Homepage'
import CoinPage from './pages/CoinPage'

import './App.css';
import { makeStyles } from '@material-ui/core'

function App() {
  const appRef = createRef();

  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: '#14161a',
      color: 'white',
      minHeight: '100vh'
    }
  }))

  const classes = useStyles()

  return (
    <BrowserRouter ref={appRef}>
      <div className={classes.App}>
        <Header />
        <Route path="/" component={Homepage} exact />
        <Route path="/coins/:id" component={CoinPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import Header from './components/Header'
import Homepage from './pages/Homepage'
import CoinPage from './pages/CoinPage'

import './App.css';
import { ThemeProvider } from "@material-ui/core/styles";
import { unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core'

function App() {
  const theme = unstable_createMuiStrictModeTheme();
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: '#14161a',
      color: 'white',
      minHeight: '100vh'
    }
  }))

  const classes = useStyles()

  return (
    <ThemeProvider theme = {theme}>
      <BrowserRouter>
        <div className={classes.App}>
          <Header />
          <Route path="/" component={Homepage} exact />
          <Route path="/coins/:id" component={CoinPage} />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

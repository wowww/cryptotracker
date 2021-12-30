import React from 'react'
import { AppBar, Container, MenuItem, Select, Toolbar, Typography, ThemeProvider } from '@material-ui/core'
import { makeStyles, createTheme } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: 'gold',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    cursor: 'pointer',
  }
}))

const Header = () => {

  const classes = useStyles();
  const history = useHistory();
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      type: 'dark'
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color='transparent' postion='static'>
        <Container>
          <Toolbar>
            <Typography 
              onClick={() => history.push('/')} 
              className={classes.title}
            >Crypto App</Typography>
            <Select 
              variant="outlined"
              style={{ width: 100, height: 40, marginRight: 15 }}
            >
              <MenuItem value={'USD'}>USD</MenuItem>
              <MenuItem value={'KRW'}>KRW</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  )
}

export default Header

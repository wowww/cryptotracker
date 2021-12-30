import React from 'react'
import { AppBar, Container, MenuItem, Select, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
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

  return (
    <AppBar color='transparent' postion='static'>
      <Container>
        <Toolbar>
          <Typography 
            onClick={() => history.push('/')} 
            className={classes.title}
          >Crypto App</Typography>
          <Select 
            variant="outlined"
            style={{ width: 100, height: 40, marginLeft: 15 }}
          >
            <MenuItem value={'USD'}>USD</MenuItem>
            <MenuItem value={'KRW'}>KRW</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header

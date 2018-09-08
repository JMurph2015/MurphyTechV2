import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Route } from 'react-router-dom';
import { NavBar } from './NavBar/NavBar';
import { Home } from './Home/Home';
import { About } from './About/About';
import { Blog } from './Blog/Blog';
import { CssBaseline } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#6f74dd',
      main: '#3949ab',
      dark: '#00227b',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ffe54c',
      main: '#ffb300',
      dark: '#c68400',
      contrastText: '#000000',
    },
  },
  typography: {
    fontFamily: [
      'Lato',
      'Roboto',
      'sans-serif'
    ].join(','),
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar></NavBar>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/blog" exact component={Blog}/>
      </MuiThemeProvider>
    );
  }
}

export default App;

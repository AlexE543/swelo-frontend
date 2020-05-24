import React from 'react';
import Layout from './components/Layout';
import './App.css';
import {createMuiTheme} from '@material-ui/core/styles';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "rgb(0, 84, 138)",
        },
        secondary: {
            main: "rgb(107, 227, 255)",
        }, 
        background: {
            default: '#e0e0e0',
        },
        text: {
          primary: "rgb(0, 0, 0)",
          secondary: "rgb(0, 84, 138)",
          // secondary: "rgb(165, 165, 165)"
        },
        error: {
            main: "rgb(255, 0, 0)",
        },
        // warning: {
        //     main: orange[500],
        // },
        // info: {
        //     main: grey[500],
        // },
        // success: {
        //     main: green[500],
        // },
        // test: {
        //     main: red[500],
        // }
    },
});



function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Layout/>
      </MuiThemeProvider>
    </div>
  );
}

export default App;

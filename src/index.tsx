import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import {AppRouter} from "./app/router/AppRouter";
import {MuiThemeProvider} from "@material-ui/core";
import {mainTheme} from "./app/theme/MainTheme";
import "./index.css";

ReactDOM.render(
    <MuiThemeProvider theme={mainTheme}>
        <AppRouter/>
    </MuiThemeProvider>,
    document.getElementById('root')
);
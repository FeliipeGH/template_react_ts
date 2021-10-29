import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import {AppRouter} from "./ui/router/AppRouter";
import {MuiThemeProvider} from "@material-ui/core";
import {mainTheme} from "./ui/theme/MainTheme";
import "./assets/styles/css/index.css";
import {Provider} from "react-redux";
import {mainStore} from "./store/mainStore";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <MuiThemeProvider theme={mainTheme}>
        <Provider store={mainStore}>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);
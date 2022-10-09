import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from "react-redux";
import store from "./redux/store/store";
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme/theme";

import {AppContainer} from "./AppContainer";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <ThemeProvider theme={theme}>
        <Provider store={store} >
                <AppContainer state={store.getState()}/>
        </Provider>
    </ThemeProvider>
);

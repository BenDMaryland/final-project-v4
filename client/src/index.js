import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import styled from 'styled-components';
import { Routes, Route } from "react-router-dom"
import { BrowserRouter } from "react-router-dom";
import {CurrentUserProvider} from "./custom/CurrentUser"

ReactDOM.render(
  <BrowserRouter>
    <CurrentUserProvider>
      <App style={{"height": "100%"}}/>
    </CurrentUserProvider >
  </BrowserRouter>,
  document.getElementById('root')
);


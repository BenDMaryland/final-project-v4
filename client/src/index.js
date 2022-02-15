import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import styled from 'styled-components';
import { Routes, Route } from "react-router-dom"
import { BrowserRouter } from "react-router-dom";
import {CurrentUserProvider} from "./custom/CurrentUser"
import Home from './components/Portfolio/Home';
import FakeFinal from './components/FakeFinal'
ReactDOM.render(
  <BrowserRouter>
    <CurrentUserProvider>
      <Routes>
        <Route path='/fakefinal' element={<FakeFinal style={{ "height": "100%" }} />} />
        <Route path='/portfolio' element={<Home style={{ "height": "100%" }} />} />
     <Route path='/*' element={  <App style={{"height": "100%"}}/>}/>

      </Routes>
    </CurrentUserProvider >
  </BrowserRouter>,
  document.getElementById('root')
);


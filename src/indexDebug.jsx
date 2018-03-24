import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//import {Provider} from 'react-redux';
//import store from './redux/store';
import Wake from './stories/Wake'

ReactDOM.render(
  <BrowserRouter >
    <Route path= '/' component= {Wake}/>
  </BrowserRouter >,
  document.getElementById('root')
);

  //<Provider store={store}>
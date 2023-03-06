import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import Cart from './components/Cart';
import ScrollTop from './components/Header/ScrollTop';
import WishList from './components/WishList';
import './index.css';
import cartReducer from './state/cartSlice';

const store = configureStore({
  reducer: {
    
    cart:cartReducer,
    
  },
  
});
setupListeners(store.dispatch)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <ScrollTop/>
    <App />
    <WishList/>
    <Cart/>
    </BrowserRouter>
    </Provider>
    
    
  </React.StrictMode>
);



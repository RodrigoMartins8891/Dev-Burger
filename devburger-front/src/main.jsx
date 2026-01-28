import React from 'react';
import ReactDOM from 'react-dom/client';
import { CartProvider } from './contexts/CartContext';
import { AppRoutes } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  </React.StrictMode>
);
